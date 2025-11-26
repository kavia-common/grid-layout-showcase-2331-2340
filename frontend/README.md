# Grid Layout Showcase (Frontend)

This React application demonstrates a flexible grid system with an Ocean Professional theme using Tailwind CSS. It includes an interactive control panel to adjust columns, gaps, and row height; a resizable preview canvas; alignment and gap presets; and a basic navigation/footer scaffold. The app is self-contained and does not require API environment variables.

## Overview and Purpose

The purpose of this project is to provide a clear, interactive reference for building responsive layouts with CSS Grid and Tailwind utilities. It showcases how to:
- Configure a semantic color system and tokens for a consistent theme.
- Adjust grid parameters dynamically and preview results immediately.
- Demonstrate alignment, breakpoints, and spacing variants in a realistic UI shell.
- Offer accessible interactions including keyboard navigation and clear focus rings.

## Prerequisites and Setup

This is a standard Create React App project using Tailwind CSS. Tailwind is already configured for you via `tailwind.config.js` and `postcss.config.js`, and styles are imported in `src/index.css`.

Steps:
1. Install Node.js (version 16+ recommended).
2. From `grid-layout-showcase-2331-2340/frontend`, install dependencies:
   - npm install
3. No additional configuration is required for Tailwind or PostCSS; they are pre-configured.

## How to Run

- Development server:
  - npm start
  - Opens at http://localhost:3000 and hot reloads on file changes.
- Production build:
  - npm run build
  - Outputs optimized assets to the build folder.
- Tests (optional at this stage):
  - npm test
  - Uses the default CRA test runner setup.

## Ocean Professional Theme Tokens

The theme uses Ocean Professional tokens defined across Tailwind’s theme extension and CSS variables. The core mappings are:

- Primary: #2563EB
- Secondary/Success (accent/amber): #F59E0B
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827
- Gradient: from-blue-500/10 to-gray-50

Where to find them:
- tailwind.config.js
  - Colors are extended under colors.primary, colors.amberAccent, success, error, background, surface, text, and border.
  - Shadows and ring colors are tuned for accessible focus.
  - Background images ocean-soft and ocean-accent expose gradient utilities.
- src/index.css
  - CSS variables mirror the semantic tokens and are used by utility classes such as bg-surface, border-subtle, and text-muted.
- src/utils/constants.js
  - THEME object centralizes the brand palette and gradient reference for use in components.

Example usage:
- className="text-primary-600" uses Tailwind’s extended primary scale.
- className="border-subtle" and className="text-muted" use utilities bound to CSS variables.

## Directory Structure

- src/components
  - Navbar.jsx: Top navigation with theme toggle and sample links.
  - ControlPanel.jsx: Adjusts columns, gap, row height, and toggles responsive and guides.
  - GridCanvas.jsx: Main showcases including resizable preview, responsive spans, alignments, gap presets, and breakpoints legend.
  - GridCard.jsx: Visual card used inside grid samples, with optional alignment area and nested mini-grid.
  - Footer.jsx: Simple footer with example links.
- src/hooks
  - useGridState.js: Manages grid configuration, persistence to localStorage, and derived styles for the grid.
  - useResizable.js: Provides accessible mouse/touch/keyboard resizing with ARIA attributes.
- src/utils
  - constants.js: Ocean theme tokens and demo data (breakpoints, variants, gap presets, and card definitions).
- src/styles
  - Global styles are in src/index.css (Tailwind layers and theme CSS variables).
  - src/App.css retains minimal CRA scaffolding styles.
- src/App.js and src/index.js
  - Wire up the layout, theme application, and mount point.

## Controls Reference (Control Panel)

The control panel lets you manipulate the grid in real time:
- Columns: Sets the number of grid columns (1–24). Arrow keys adjust; Shift+Arrow changes faster.
- Gap (px): Sets the grid gap in pixels (0–48). Supports keyboard increments as above.
- Row Height (px): Controls the auto row height in pixels (40–320).
- Responsive toggle: Semantic flag you can use for conditional behavior; the demos primarily reflect responsive layout with CSS grid and Tailwind.
- Show guides: Toggles translucent column guides in the resizable preview.

These values are persisted to localStorage so your adjustments remain on reload.

## Using the Resizable Canvas

The primary grid preview sits inside a resizable left pane:
- Mouse/touch: Drag the vertical handle between the left preview and right info panel.
- Keyboard: Focus the handle and use ArrowLeft/ArrowRight to resize (Shift for larger steps). Home jumps to minimum and End to maximum width.
- ARIA: The handle is a separator with aria-orientation, aria-valuemin/aria-valuemax/aria-valuenow to announce state to assistive tech.

The current preview width is displayed in the right-side panel, making it easy to correlate width to responsive behavior.

## Accessibility Considerations

The app includes several accessibility features:
- Focus rings: A consistent visible focus outline is provided via :focus-visible and Tailwind ring settings to maintain clarity without overwhelming visuals.
- ARIA roles and labels: Landmark regions (role="region"), navigation (role="navigation"), and labeled sections help screen readers understand structure.
- Keyboard support: Numeric inputs support Arrow keys and Shift modifiers. The resize handle supports keyboard adjustments and Home/End navigation.
- Color contrast: The Ocean theme colors and shadow/ring values are chosen for readability and accessible contrast across white surfaces and light backgrounds.

## How to Extend the Showcases

You can add new sections, cards, and variants by following the established patterns:

- New showcase section:
  - Create a new segment inside GridCanvas.jsx, mirroring the header + grid structure used by other sections.
  - Use the derived styles from useGridState (styles) to align with global controls for columns and gap.
- New card variant:
  - Add a new entry to DEMO_CARDS in src/utils/constants.js. Provide spans, title/subtitle, optional align, and nested flags.
  - Render it inside the appropriate grid in GridCanvas by mapping over DEMO_CARDS.
- New alignment or gap variant:
  - Update ALIGN_VARIANTS or GAP_PRESETS in src/utils/constants.js to introduce additional permutations.
  - Reuse GridCard’s optional alignment demo area or nested mini-grid blocks to illustrate variations.

Guidelines:
- Keep semantic tokens for colors to preserve visual consistency.
- Prefer Tailwind utilities for layout/spacing and rely on the theme extension for colors.
- Use accessible roles, labels, and keyboard interactions for any new interactive elements.

## Environment Variables

No environment variables are required to run this showcase. The container defines a set of REACT_APP_* variables, but this demo does not read or depend on them:
REACT_APP_API_BASE, REACT_APP_BACKEND_URL, REACT_APP_FRONTEND_URL, REACT_APP_WS_URL, REACT_APP_NODE_ENV, REACT_APP_NEXT_TELEMETRY_DISABLED, REACT_APP_ENABLE_SOURCE_MAPS, REACT_APP_PORT, REACT_APP_TRUST_PROXY, REACT_APP_LOG_LEVEL, REACT_APP_HEALTHCHECK_PATH, REACT_APP_FEATURE_FLAGS, REACT_APP_EXPERIMENTS_ENABLED

You can ignore these for local development of this showcase.

## Optional: Testing Notes

Basic CRA testing plumbing is provided. Suggested tests to add:
- Component rendering: Navbar, ControlPanel, GridCanvas, and Footer render without errors and expose expected ARIA attributes.
- Control interactions: Changing columns, gap, and row height updates grid styles; toggles for responsive and guides affect the UI.
- Resizable behavior: Handle responds to keyboard events, updates aria-valuenow, and clamps within min/max bounds.
- Accessibility checks: Focus-visible rings appear on keyboard navigation; required landmarks and labels exist.

To run tests:
- npm test

## Scripts Reference

- start: Starts the development server.
- build: Creates a production build in the build directory.
- test: Runs the test watcher (Jest via CRA).
- eject: Ejects CRA config (irreversible; not needed for this showcase).

## Credits

Built with React and Tailwind CSS. Theme and layout are tailored to the Ocean Professional style with subtle gradients, accessible focus states, and clean component structure.
