import { useEffect, useMemo, useState } from "react";
import { DEFAULT_GRID_CONFIG } from "../utils/constants";

// PUBLIC_INTERFACE
export function useGridState(initialConfig = DEFAULT_GRID_CONFIG) {
  /**
   * Hook to manage grid layout configuration and UI flags.
   * - Persists to sessionStorage to survive reloads per session.
   * - Provides validated setters with bounds checking.
   */
  const storageKey = "grid-config";
  const [config, setConfig] = useState(() => {
    try {
      const raw = sessionStorage.getItem(storageKey);
      return raw ? { ...initialConfig, ...JSON.parse(raw) } : initialConfig;
    } catch {
      return initialConfig;
    }
  });

  // Derived values for Tailwind inline styles
  const styles = useMemo(() => {
    return {
      gridTemplateColumns: `repeat(${config.columns}, minmax(0, 1fr))`,
      gap: `${config.gap}px`
    };
  }, [config.columns, config.gap]);

  // Persist
  useEffect(() => {
    try {
      sessionStorage.setItem(storageKey, JSON.stringify(config));
    } catch {
      // ignore persistence failures
    }
  }, [config]);

  const setColumns = (val) =>
    setConfig((c) => ({
      ...c,
      columns: Math.min(24, Math.max(1, Number(val) || 1))
    }));

  const setGap = (val) =>
    setConfig((c) => ({
      ...c,
      gap: Math.min(48, Math.max(0, Number(val) || 0))
    }));

  const setRowHeight = (val) =>
    setConfig((c) => ({
      ...c,
      rowHeight: Math.min(320, Math.max(40, Number(val) || 40))
    }));

  const toggleResponsive = () =>
    setConfig((c) => ({ ...c, responsive: !c.responsive }));

  const toggleGuides = () =>
    setConfig((c) => ({ ...c, showGuides: !c.showGuides }));

  return {
    config,
    styles,
    setColumns,
    setGap,
    setRowHeight,
    toggleResponsive,
    toggleGuides,
    setConfig
  };
}
