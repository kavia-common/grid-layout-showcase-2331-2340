//
// Ocean Theme constants and default grid configuration
//

// PUBLIC_INTERFACE
export const THEME = {
  name: "Ocean Professional",
  colors: {
    primary: "#2563EB",
    secondary: "#F59E0B",
    success: "#F59E0B",
    error: "#EF4444",
    background: "#f9fafb",
    surface: "#ffffff",
    text: "#111827"
  },
  gradient: "from-blue-500/10 to-gray-50"
};

// PUBLIC_INTERFACE
export const DEFAULT_GRID_CONFIG = {
  columns: 12,
  gap: 12,
  rowHeight: 120,
  responsive: true,
  showGuides: true
};

// PUBLIC_INTERFACE
export const NAV_LINKS = [
  { label: "Overview", href: "#overview" },
  { label: "Layouts", href: "#layouts" },
  { label: "Components", href: "#components" },
  { label: "Docs", href: "#docs" }
];
