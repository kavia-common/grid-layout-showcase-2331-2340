import { THEME } from "../utils/constants";

// PUBLIC_INTERFACE
export default function ControlPanel({
  config,
  setColumns,
  setGap,
  setRowHeight,
  toggleResponsive,
  toggleGuides
}) {
  /** Panel for controlling grid configuration. */
  return (
    <section className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-wrap items-end gap-4">
          <Field
            label="Columns"
            value={config.columns}
            min={1}
            max={24}
            onChange={setColumns}
          />
          <Field
            label="Gap (px)"
            value={config.gap}
            min={0}
            max={48}
            onChange={setGap}
          />
          <Field
            label="Row Height (px)"
            value={config.rowHeight}
            min={40}
            max={320}
            onChange={setRowHeight}
          />

          <div className="flex items-center gap-2 ml-auto">
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={config.responsive}
                onChange={toggleResponsive}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Responsive
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={config.showGuides}
                onChange={toggleGuides}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              Show guides
            </label>
            <div
              className="hidden md:block h-8 w-px bg-gray-200 mx-2"
              aria-hidden
            />
            <div
              className="hidden md:flex items-center gap-2 text-xs text-gray-600 px-3 py-1.5 rounded-md border border-gray-200 bg-white"
              style={{
                boxShadow:
                  "inset 0 0 0 1px rgba(255,255,255,0.6), 0 1px 2px rgba(0,0,0,0.04)"
              }}
            >
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{
                  background: `linear-gradient(to right, ${THEME.colors.primary}, ${THEME.colors.secondary})`
                }}
              />
              Ocean theme
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, min, max }) {
  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-500 mb-1">{label}</label>
      <input
        type="number"
        value={value}
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-36 text-sm rounded-md border border-gray-300 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition"
      />
    </div>
  );
}
