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

// PUBLIC_INTERFACE
export const BREAKPOINTS = [
  { id: "sm", label: "sm ≥640px", min: 640 },
  { id: "md", label: "md ≥768px", min: 768 },
  { id: "lg", label: "lg ≥1024px", min: 1024 },
  { id: "xl", label: "xl ≥1280px", min: 1280 }
];

// PUBLIC_INTERFACE
export const ALIGN_VARIANTS = [
  { id: "start", label: "Start", className: "place-items-start" },
  { id: "center", label: "Center", className: "place-items-center" },
  { id: "end", label: "End", className: "place-items-end" },
  { id: "stretch", label: "Stretch", className: "place-items-stretch" }
];

// PUBLIC_INTERFACE
export const JUSTIFY_VARIANTS = [
  { id: "start", label: "Start", className: "justify-items-start" },
  { id: "center", label: "Center", className: "justify-items-center" },
  { id: "end", label: "End", className: "justify-items-end" },
  { id: "stretch", label: "Stretch", className: "justify-items-stretch" }
];

// PUBLIC_INTERFACE
export const DEMO_CARDS = [
  {
    title: "Responsive column span",
    subtitle: "col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3",
    spans: { base: 12, sm: 6, md: 4, lg: 3 }
  },
  {
    title: "Wide feature",
    subtitle: "Spans 8 cols on lg screens",
    spans: { base: 12, md: 8, lg: 8 }
  },
  {
    title: "Sidebar",
    subtitle: "Spans 4 cols on lg screens",
    spans: { base: 12, md: 4, lg: 4 }
  },
  {
    title: "Alignment demo",
    subtitle: "Center aligned content",
    align: "center",
    spans: { base: 6, md: 3 }
  },
  {
    title: "Nested grid",
    subtitle: "2x2 nested grid of items",
    nested: true,
    spans: { base: 12, sm: 6 }
  }
];

// PUBLIC_INTERFACE
export const GAP_PRESETS = [
  { id: 0, label: "0" },
  { id: 4, label: "4" },
  { id: 8, label: "8" },
  { id: 12, label: "12" },
  { id: 16, label: "16" },
  { id: 24, label: "24" },
  { id: 32, label: "32" },
  { id: 48, label: "48" }
];
