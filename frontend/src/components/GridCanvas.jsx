import GridCard from "./GridCard";

// PUBLIC_INTERFACE
export default function GridCanvas({ config, styles }) {
  /**
   * The main grid canvas area. Renders sample cards to visualize the grid.
   * Shows column guides if enabled.
   */
  const sample = new Array(Math.min(24, config.columns + 4)).fill(0);

  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
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
                  subtitle="Resize and tweak the grid controls above"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
