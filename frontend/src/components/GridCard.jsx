import { THEME } from "../utils/constants";

/**
 * PUBLIC_INTERFACE
 * GridCard
 * Renders a visual card. Supports:
 * - index badge
 * - optional alignment demo block
 * - optional nested mini-grid
 */
export default function GridCard({
  title = "Card",
  subtitle = "Subtitle",
  index = 0,
  align = null,
  nested = false
}) {
  /** A simple card to visualize grid items with optional demo content. */
  return (
    <div className="relative rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{
          background: `linear-gradient(to right, ${THEME.colors.primary}, ${THEME.colors.secondary})`
        }}
        aria-hidden
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
            #{index + 1}
          </span>
        </div>
        <p className="mt-1 text-xs text-gray-600">{subtitle}</p>

        {/* Alignment demo area */}
        {align && (
          <div className="mt-3 border border-dashed border-gray-200 rounded-md p-3">
            <div
              className={`grid grid-cols-3 gap-2 h-20 place-items-${align}`}
              aria-label={`alignment-${align}`}
            >
              <div className="h-6 w-6 rounded bg-blue-100 border border-blue-200" />
              <div className="h-6 w-6 rounded bg-amber-100 border border-amber-200" />
              <div className="h-6 w-6 rounded bg-gray-100 border border-gray-200" />
            </div>
          </div>
        )}

        {/* Nested grid demo */}
        {nested && (
          <div className="mt-3">
            <div className="text-[10px] text-gray-500 mb-1">Nested grid</div>
            <div className="grid grid-cols-2 gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-10 rounded-md bg-gradient-to-br from-blue-50 to-amber-50 border border-gray-200"
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
