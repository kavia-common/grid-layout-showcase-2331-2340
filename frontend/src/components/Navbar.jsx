import { NAV_LINKS } from "../utils/constants";

// PUBLIC_INTERFACE
export default function Navbar({ theme, onToggleTheme }) {
  /** Top navigation bar with brand, nav links, and theme toggle. */
  return (
    <nav
      className="w-full bg-white/80 backdrop-blur border-b border-subtle sticky top-0 z-40"
      role="navigation"
      aria-label="Primary"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="h-8 w-8 rounded-lg shadow-sm"
              style={{ background: "linear-gradient(to bottom right, #2563eb, #f59e0b)" }}
              aria-hidden
            />
            <span className="text-sm font-semibold text-[color:var(--color-text)]">
              Grid Showcase
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[color:var(--color-text-subtle)] hover:text-[color:var(--color-text)] transition-colors rounded focus:ring-0 focus-visible:outline-none focus-visible:shadow-focus"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md border border-subtle bg-white text-[color:var(--color-text-subtle)] hover:border-[color:var(--color-border-strong)] hover:shadow-sm transition shadow-xs focus:ring-0 focus-visible:outline-none focus-visible:shadow-focus"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title="Toggle theme"
            >
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </button>
            <a
              href="#get-started"
              className="hidden sm:inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-md text-white shadow-sm focus:ring-0 focus-visible:outline-none focus-visible:shadow-focus"
              style={{ background: "linear-gradient(to right, #2563eb, #f59e0b)" }}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
