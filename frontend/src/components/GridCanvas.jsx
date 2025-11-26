import GridCard from "./GridCard";
import { ALIGN_VARIANTS, BREAKPOINTS, DEMO_CARDS, GAP_PRESETS } from "../utils/constants";
import { useResizable } from "../hooks/useResizable";

/**
 * PUBLIC_INTERFACE
 * GridCanvas
 * Demonstrates:
 * - Column guides
 * - Auto-flow grid
 * - Responsive column spans
 * - Alignment variants
 * - Gap presets & row heights
 * - Breakpoint preview
 * - Resizable preview panel
 */
export default function GridCanvas({ config, styles }) {
  const sample = new Array(Math.min(24, config.columns + 4)).fill(0);

  // Resizable left preview width
  const { size: leftWidth, handleProps } = useResizable({
    initial: 320,
    min: 200,
    max: 640,
    axis: "x"
  });

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-10">
        {/* SECTION: Resizable canvas wrapper */}
        <div
          className="w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-colors"
          role="region"
          aria-label="Resizable grid preview"
        >
          <div className="flex items-stretch">
            {/* Left: resizable column with grid demo */}
            <div
              className="shrink-0 transition-[width] duration-150 ease-out"
              style={{ width: leftWidth }}
            >
              <div className="p-4">
                <header className="mb-3">
                  <h2 className="text-sm font-medium text-gray-800">Auto grid</h2>
                  <p className="text-xs text-gray-600">
                    Using repeat({config.columns}, minmax(0, 1fr)) and gap {config.gap}px
                  </p>
                </header>

                <div className="relative">
                  {/* Column guides */}
                  {config.showGuides && (
                    <div
                      className="pointer-events-none absolute inset-0 grid"
                      style={{
                        gridTemplateColumns: `repeat(${config.columns}, minmax(0, 1fr))`
                      }}
                      aria-hidden
                    >
                      {Array.from({ length: config.columns }).map((_, i) => (
                        <div
                          key={`guide-${i}`}
                          className="mx-[2px] my-1 rounded"
                          style={{
                            background:
                              i % 2 === 0 ? "rgba(37, 99, 235, 0.06)" : "rgba(245, 158, 11, 0.06)"
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Grid content */}
                  <div
                    className="grid relative"
                    style={{
                      ...styles,
                      gridAutoRows: `${config.rowHeight}px`
                    }}
                  >
                    {sample.map((_, i) => (
                      <div key={i} className="col-span-1">
                        <GridCard
                          index={i}
                          title={`Card ${i + 1}`}
                          subtitle="Resize the panel edge and tweak the controls."
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Resize handle */}
            <div
              {...handleProps}
              className={`${handleProps.className} w-2 relative group`}
              aria-valuemin={200}
              aria-valuemax={640}
              aria-valuenow={leftWidth}
              aria-label="Resize preview width"
            >
              <div className="absolute inset-y-0 left-0 w-px bg-gray-200 group-hover:bg-blue-300 transition-colors" />
              <div className="absolute inset-y-0 -left-1 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-y-0 left-0 right-0 bg-blue-500/5" />
              </div>
            </div>

            {/* Right: explanatory panel */}
            <div className="flex-1 min-w-0 p-4">
              <h3 className="text-sm font-medium text-gray-800 mb-2">Resize me</h3>
              <p className="text-xs text-gray-600">
                Drag the separator, use arrow keys when focused (Shift for larger steps), or use
                Home/End for min/max width. This simulates different container widths.
              </p>
              <div className="mt-3 rounded-md border border-gray-200 bg-gray-50 text-xs text-gray-700 p-3">
                <div>Current preview width: <span className="font-medium">{Math.round(leftWidth)}px</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: Responsive spans */}
        <div>
          <header className="mb-3">
            <h2 className="text-sm font-medium text-gray-800">Responsive spans</h2>
            <p className="text-xs text-gray-600">
              Each card demonstrates col-span behavior across breakpoints.
            </p>
          </header>
          <div
            className="grid"
            style={{
              ...styles,
              gridAutoRows: `${config.rowHeight}px`
            }}
          >
            {DEMO_CARDS.map((card, i) => {
              const { base = 12 } = card.spans || {};
              const colStyle = {
                gridColumn: `span ${base} / span ${base}`
              };
              return (
                <div key={`span-${i}`} style={colStyle}>
                  <GridCard
                    index={i}
                    title={card.title}
                    subtitle={card.subtitle}
                    align={card.align || null}
                    nested={!!card.nested}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* SECTION: Alignment variants */}
        <div>
          <header className="mb-3">
            <h2 className="text-sm font-medium text-gray-800">Alignment variants</h2>
            <p className="text-xs text-gray-600">
              place-items controls both align-items and justify-items in the grid.
            </p>
          </header>
          <div
            className="grid"
            style={{
              ...styles,
              gridAutoRows: `${config.rowHeight}px`
            }}
          >
            {ALIGN_VARIANTS.map((v, i) => (
              <div key={v.id} style={{ gridColumn: `span ${Math.max(3, Math.floor(config.columns / 4))} / span ${Math.max(3, Math.floor(config.columns / 4))}` }}>
                <GridCard
                  index={i}
                  title={`Place items: ${v.label}`}
                  subtitle={v.className}
                  align={v.id}
                />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: Gap presets & row heights */}
        <div>
          <header className="mb-3">
            <h2 className="text-sm font-medium text-gray-800">Gap & row height</h2>
            <p className="text-xs text-gray-600">
              Preview different gaps; the global control above still applies to other sections.
            </p>
          </header>

          <div className="space-y-6">
            {GAP_PRESETS.slice(0, 5).map((gp, gi) => (
              <div key={`gap-${gp.id}`}>
                <div className="text-[11px] text-gray-600 mb-2">gap: {gp.id}px • row: {Math.max(60, Math.min(200, config.rowHeight))}px</div>
                <div
                  className="grid"
                  style={{
                    gridTemplateColumns: `repeat(${config.columns}, minmax(0, 1fr))`,
                    gap: `${gp.id}px`,
                    gridAutoRows: `${Math.max(60, Math.min(200, config.rowHeight))}px`
                  }}
                >
                  {Array.from({ length: Math.min(12, config.columns) }).map((_, ci) => (
                    <div key={`gap-card-${gi}-${ci}`} style={{ gridColumn: "span 1 / span 1" }}>
                      <GridCard
                        index={ci}
                        title={`Gap ${gp.id}`}
                        subtitle="Single-column items"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: Breakpoint preview legend */}
        <div>
          <header className="mb-3">
            <h2 className="text-sm font-medium text-gray-800">Breakpoints</h2>
            <p className="text-xs text-gray-600">
              These are Tailwind’s default breakpoints. Resize the window to test responsiveness.
            </p>
          </header>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {BREAKPOINTS.map((bp) => (
              <div
                key={bp.id}
                className="rounded-md border border-gray-200 bg-white p-3 text-xs text-gray-700 flex items-center justify-between"
              >
                <span className="font-medium">{bp.id}</span>
                <span className="text-gray-500">{bp.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
