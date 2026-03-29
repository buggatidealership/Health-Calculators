// DermaMedicum verified brand system — extracted from dermamedicum.com March 2026
// Two modes: BRANDED (full brand colors) and FREEFORM (logo only, creative freedom)

export const BRAND = {
  // Core palette (from Wix CSS variables)
  cream: "#F6F0E4",       // --color_11, primary background
  navy: "#30385F",        // --color_15, primary text/headings
  sage: "#8F9E90",        // --color_17, accent green
  warmBrown: "#7F6954",   // --color_18, warm accent
  mauve: "#A33B76",       // --color_23, accent pink
  teal: "#558695",        // --color_28, secondary accent
  darkTeal: "#1C2D32",    // --color_30, deep dark
  olive: "#ACAF5E",       // --color_33, natural green
  deepNavy: "#1A2744",    // derived dark for contrast

  // Neutrals
  white: "#FFFFFF",
  lightGray: "#C5C2C3",   // --color_12
  midGray: "#9394A2",     // --color_13
  darkGray: "#626680",    // --color_14

  // Functional
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
