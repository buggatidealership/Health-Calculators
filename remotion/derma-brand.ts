// DermaMedicum verified brand system — extracted from dermamedicum.com March 2026
// Verified Mar 29: full Wix CSS variable extraction (color_0–color_65)
//
// THREE-TONE SYSTEM (verified from website):
//   1. #F6F0E4 cream beige — warm background surfaces (the site lives on this)
//   2. #7F6954 warm brown — text, buttons, accents (the "feel" color — font_0–font_5, hover states, active nav)
//   3. #30385F navy — logo, headings, structure (button fill default, h1/h2)
//
// REELS MUST USE ALL THREE. Prior reels were navy-only — missing the warm brown and beige surfaces.

export const BRAND = {
  // === PRIMARY THREE-TONE ===
  cream: "#F6F0E4",       // --color_11/36. Primary background. "Unsere Leistungen" bg. The dominant surface.
  warmBrown: "#7F6954",   // --color_18/41/51/52. Body text (all font classes), button hover, active nav, accent-1. THE feel color.
  navy: "#30385F",        // --color_15/37/48/49. Logo, headings, button fill default, structure.

  // === SUPPORTING TONES ===
  sage: "#8F9E90",        // --color_17, accent green
  teal: "#558695",        // --color_28, secondary accent
  goldBorder: "#B0A986",  // rgba(176,169,134,1). Decorative borders. 12 occurrences on site.
  coolGray: "#D2DADC",    // --color_42. Section dividers, nav hover bg, accent-2.
  darkTeal: "#1C2D32",    // --color_30, deep dark (use sparingly)
  deepNavy: "#1A2744",    // derived dark for contrast sections

  // === NEUTRALS ===
  white: "#FFFFFF",
  lightGray: "#C5C2C3",   // --color_12
  midGray: "#9394A2",     // --color_13
  darkGray: "#626680",    // --color_14

  // === FUNCTIONAL ===
  error: "#E8785E",
  success: "#6EC89B",
} as const;

export const FONTS = {
  heading: "'Georgia', 'Times New Roman', serif",  // Fabio XM not available in Remotion, Georgia is closest
  body: "'Inter', -apple-system, sans-serif",
  mono: "'JetBrains Mono', 'Fira Code', monospace",
} as const;

// Logo paths (staticFile)
export const LOGO = {
  dark: "derma-logo-dark.png",   // navy on transparent — for light backgrounds
  light: "derma-logo-light.png", // cream on transparent — for dark backgrounds
} as const;

// Instagram Reels safe zones
export const SAFE = {
  top: 288,      // IG UI overlay (username, follow button)
  bottom: 480,   // IG UI overlay (like, comment, share, audio)
  right: 120,    // IG action buttons
  left: 40,      // breathing room
} as const;

// Reels spec
export const SPEC = {
  width: 1080,
  height: 1920,
  fps: 30,
} as const;
