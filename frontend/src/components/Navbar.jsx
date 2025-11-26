import { NAV_LINKS, THEME } from "../utils/constants";

// PUBLIC_INTERFACE
export default function Navbar({ theme, onToggleTheme }) {
  /** Top navigation bar with brand, nav links, and theme toggle. */
  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-amber-400 shadow-md" />
            <span className="text-sm font-semibold text-gray-900">
              Grid Showcase
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md border border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:shadow-sm transition"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title="Toggle theme"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
            <a
              href="#get-started"
              className="hidden sm:inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-md text-white"
              style={{ background: `linear-gradient(to right, ${THEME.colors.primary}, ${THEME.colors.secondary})` }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
