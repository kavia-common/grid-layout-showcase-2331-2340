import { NAV_LINKS } from "../utils/constants";

// PUBLIC_INTERFACE
export default function Footer() {
  /** App footer with simple navigation */
  return (
    <footer className="mt-auto w-full border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Grid Layout Showcase. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {NAV_LINKS.slice(0, 3).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-gray-600 hover:text-gray-900 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
