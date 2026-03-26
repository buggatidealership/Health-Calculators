#!/bin/bash
# Post-render animation verification
# Checks: content clipping, content bounding box, thumbnail hook
# Run after every Remotion render, before pushing.
#
# Usage: bash tools/verify-animation.sh <video.mp4>
# Exit 0 = pass, Exit 1 = issues found

VIDEO="$1"
if [ -z "$VIDEO" ] || [ ! -f "$VIDEO" ]; then
  echo "Usage: bash tools/verify-animation.sh <video.mp4>"
  exit 1
fi

TMPDIR="/tmp/claude-0/anim-verify"
rm -rf "$TMPDIR"
mkdir -p "$TMPDIR"
ISSUES=0

echo "═══ ANIMATION VERIFICATION: $VIDEO ═══"
echo ""

DURATION=$(ffprobe -v quiet -show_entries format=duration -of csv=p=0 "$VIDEO" 2>/dev/null | cut -d. -f1)
echo "Duration: ${DURATION}s"

# Extract frames every 3 seconds + thumbnail
TIMESTAMPS="0.5"
for ((t=3; t<DURATION; t+=3)); do
  TIMESTAMPS="$TIMESTAMPS $t"
done
TIMESTAMPS="$TIMESTAMPS $((DURATION-1))"

for t in $TIMESTAMPS; do
  ffmpeg -ss $t -i "$VIDEO" -frames:v 1 -vf "scale=540:540" "$TMPDIR/frame-${t}.png" -y 2>/dev/null
done

FRAME_COUNT=$(ls "$TMPDIR"/frame-*.png 2>/dev/null | wc -l)
echo "Extracted $FRAME_COUNT frames"
echo ""

# CHECK 1: Content clipping — are bright pixels in the outer 4% border?
echo "--- CHECK 1: Edge clipping ---"
CLIP_ISSUES=0
for f in "$TMPDIR"/frame-*.png; do
  t=$(basename "$f" | sed 's/frame-//' | sed 's/.png//')
  RESULT=$(python3 -c "
from PIL import Image
img = Image.open('$f')
w, h = img.size
border = int(h * 0.04)
# Check all 4 borders
regions = {
    'bottom': img.crop((0, h-border, w, h)),
    'top': img.crop((0, 0, w, border)),
    'left': img.crop((0, 0, border, h)),
    'right': img.crop((w-border, 0, w, h)),
}
for name, region in regions.items():
    px = list(region.getdata())
    bright = sum(1 for r,g,b in px if max(r,g,b) > 120)
    pct = bright / len(px) * 100
    if pct > 8:
        print(f'{name}:{pct:.0f}')
" 2>/dev/null)

  if [ -n "$RESULT" ]; then
    for edge in $RESULT; do
      EDGE_NAME=$(echo "$edge" | cut -d: -f1)
      EDGE_PCT=$(echo "$edge" | cut -d: -f2)
      echo "  ⚠ CLIPPING at t=${t}s: ${EDGE_NAME} border has ${EDGE_PCT}% content (may be cut off)"
      CLIP_ISSUES=$((CLIP_ISSUES + 1))
    done
  fi
done
ISSUES=$((ISSUES + CLIP_ISSUES))
if [ "$CLIP_ISSUES" -eq 0 ]; then
  echo "  ✓ No edge clipping detected"
fi
echo ""

# CHECK 2: Content bounding box — what % of width/height does content span?
echo "--- CHECK 2: Screen utilization (bounding box) ---"
UTIL_ISSUES=0
for f in "$TMPDIR"/frame-*.png; do
  t=$(basename "$f" | sed 's/frame-//' | sed 's/.png//')
  RESULT=$(python3 -c "
from PIL import Image
img = Image.open('$f')
w, h = img.size
# Find bounding box of all non-background pixels
# Background is ~(10-12, 15-17, 24-28). Content is anything significantly different.
min_x, min_y, max_x, max_y = w, h, 0, 0
for y in range(0, h, 4):  # Sample every 4th pixel for speed
    for x in range(0, w, 4):
        r, g, b = img.getpixel((x, y))
        if max(r, g, b) > 80:  # Clearly content, not background or subtle gradient
            min_x = min(min_x, x)
            min_y = min(min_y, y)
            max_x = max(max_x, x)
            max_y = max(max_y, y)

if max_x > min_x and max_y > min_y:
    w_pct = (max_x - min_x) / w * 100
    h_pct = (max_y - min_y) / h * 100
    print(f'{w_pct:.0f},{h_pct:.0f}')
else:
    print('0,0')
" 2>/dev/null)

  if [ -n "$RESULT" ]; then
    W_PCT=$(echo "$RESULT" | cut -d, -f1)
    H_PCT=$(echo "$RESULT" | cut -d, -f2)
    # Content should span at least 60% of width and 50% of height
    W_INT=$(echo "$W_PCT" | cut -d. -f1)
    H_INT=$(echo "$H_PCT" | cut -d. -f1)
    if [ "$W_INT" -lt 40 ] && [ "$H_INT" -lt 30 ]; then
      echo "  ⚠ SPARSE at t=${t}s: Content spans ${W_PCT}%w × ${H_PCT}%h (target: 60%w × 50%h)"
      UTIL_ISSUES=$((UTIL_ISSUES + 1))
    else
      echo "  ✓ t=${t}s: ${W_PCT}%w × ${H_PCT}%h"
    fi
  fi
done
ISSUES=$((ISSUES + UTIL_ISSUES))
echo ""

# CHECK 3: Thumbnail — frame 1 must have visual content in center
echo "--- CHECK 3: Thumbnail hook ---"
THUMB="$TMPDIR/frame-0.5.png"
if [ -f "$THUMB" ]; then
  THUMB_RESULT=$(python3 -c "
from PIL import Image
img = Image.open('$THUMB')
w, h = img.size
# Center 60%
cx1, cy1 = int(w*0.2), int(h*0.15)
cx2, cy2 = int(w*0.8), int(h*0.75)
center = img.crop((cx1, cy1, cx2, cy2))
px = list(center.getdata())
bright = sum(1 for r,g,b in px if max(r,g,b) > 80)
pct = bright / len(px) * 100
print(f'{pct:.0f}')
" 2>/dev/null)

  if [ -n "$THUMB_RESULT" ]; then
    T_INT=$(echo "$THUMB_RESULT" | cut -d. -f1)
    if [ "$T_INT" -lt 5 ]; then
      echo "  ⚠ WEAK THUMBNAIL: Only ${THUMB_RESULT}% of center has visible content. Needs a visual hook."
      ISSUES=$((ISSUES + 1))
    else
      echo "  ✓ Thumbnail has ${THUMB_RESULT}% content in center"
    fi
  fi
fi
echo ""

# Summary
echo "═══ RESULT: $ISSUES issue(s) found ═══"
if [ "$ISSUES" -gt 0 ]; then
  echo "Fix before pushing."
  exit 1
else
  echo "All checks passed."
  exit 0
fi
