import { THEME } from "../utils/constants";

// PUBLIC_INTERFACE
export default function GridCard({ title = "Card", subtitle = "Subtitle", index = 0 }) {
  /** A simple card to visualize grid items. */
  return (
    <div className="relative rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: `linear-gradient(to right, ${THEME.colors.primary}, ${THEME.colors.secondary})` }}
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
      </div>
    </div>
  );
}
