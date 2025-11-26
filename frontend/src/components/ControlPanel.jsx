import { useEffect, useMemo, useRef, useState } from "react";
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
    <section
      className="w-full bg-white border-b border-gray-200"
      role="region"
      aria-label="Grid controls"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-wrap items-end gap-4">
          <Field
            id="columns"
            label="Columns"
            value={config.columns}
            min={1}
            max={24}
            onChange={setColumns}
          />
          <Field
            id="gap"
            label="Gap (px)"
            value={config.gap}
            min={0}
            max={48}
            onChange={setGap}
          />
          <Field
            id="rowHeight"
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
                aria-label="Toggle responsive behavior"
              />
              Responsive
            </label>
            <label className="flex items-center gap-2 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={config.showGuides}
                onChange={toggleGuides}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                aria-label="Toggle column guides"
              />
              Show guides
            </label>
            <div
              className="hidden md:block h-8 w-px bg-gray-200 mx-2"
              aria-hidden
            />
            <div
              className="hidden md:flex items-center gap-2 text-xs text-gray-600 px-3 py-1.5 rounded-md border border-gray-200 bg-white transition-shadow"
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
                aria-hidden
              />
              Ocean theme
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function useDebouncedNumber(value, delay = 200) {
  const [internal, setInternal] = useState(value);
  useEffect(() => setInternal(value), [value]);
  const timeout = useRef(null);
  const setDebounced = (next, onCommit) => {
    setInternal(next);
    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => {
      onCommit(next);
    }, delay);
  };
  useEffect(() => () => window.clearTimeout(timeout.current), []);
  return [internal, setDebounced];
}

function Field({ id, label, value, onChange, min, max }) {
  const [internal, setDebounced] = useDebouncedNumber(value, 250);
  const commit = (num) => {
    const val = Number.isNaN(num) ? min : num;
    const clamped = Math.min(max, Math.max(min, val));
    onChange(clamped);
  };

  const onInputChange = (e) => {
    const next = Number(e.target.value);
    setDebounced(next, commit);
  };

  const onKeyDown = (e) => {
    let delta = 0;
    const step = e.shiftKey ? 4 : 1;
    if (e.key === "ArrowUp") delta = step;
    if (e.key === "ArrowDown") delta = -step;
    if (delta !== 0) {
      e.preventDefault();
      const next = Math.min(max, Math.max(min, (Number(internal) || 0) + delta));
      setDebounced(next, commit);
    }
  };

  const describedBy = useMemo(() => `${id}-hint`, [id]);

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-xs text-gray-500 mb-1">
        {label}
      </label>
      <input
        id={id}
        type="number"
        value={internal}
        min={min}
        max={max}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        aria-describedby={describedBy}
        className="w-36 text-sm rounded-md border border-gray-300 px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition"
      />
      <span id={describedBy} className="sr-only">
        Use arrow keys to adjust. Shift plus arrow changes faster.
      </span>
    </div>
  );
}
