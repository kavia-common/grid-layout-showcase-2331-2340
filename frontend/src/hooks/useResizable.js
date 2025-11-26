import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Simple resizable hook with mouse/touch/keyboard support and ARIA.
 * Usage:
 * const { size, handleProps } = useResizable({ initial: 320, min: 200, max: 720 });
 * <aside style={{ width: size }} />
 * <div {...handleProps} />
 */

// PUBLIC_INTERFACE
export function useResizable({ initial = 320, min = 200, max = 720, axis = "x", step = 8 } = {}) {
  /** Hook providing aresizable size and accessible handleProps. */
  const [size, setSize] = useState(initial);
  const startRef = useRef({ start: 0, size: initial, active: false });
  const axisIsX = axis === "x";

  const clamp = useCallback(
    (v) => Math.max(min, Math.min(max, v)),
    [min, max]
  );

  const onPointerMove = useCallback(
    (e) => {
      if (!startRef.current.active) return;
      const clientPos =
        "touches" in e
          ? axisIsX
            ? e.touches[0]?.clientX ?? 0
            : e.touches[0]?.clientY ?? 0
          : axisIsX
          ? e.clientX
          : e.clientY;
      const delta = clientPos - startRef.current.start;
      const next = clamp(startRef.current.size + delta);
      setSize(next);
    },
    [axisIsX, clamp]
  );

  const endDrag = useCallback(() => {
    startRef.current.active = false;
    document.body.style.userSelect = "";
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", endDrag);
    document.removeEventListener("touchmove", onPointerMove);
    document.removeEventListener("touchend", endDrag);
  }, [onPointerMove]);

  const onPointerDown = useCallback(
    (e) => {
      const clientPos =
        "touches" in e
          ? axisIsX
            ? e.touches[0]?.clientX ?? 0
            : e.touches[0]?.clientY ?? 0
          : axisIsX
          ? e.clientX
          : e.clientY;
      startRef.current = { start: clientPos, size, active: true };
      document.body.style.userSelect = "none";
      document.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("pointerup", endDrag, { passive: true });
      document.addEventListener("touchmove", onPointerMove, { passive: true });
      document.addEventListener("touchend", endDrag, { passive: true });
    },
    [axisIsX, endDrag, onPointerMove, size]
  );

  const onKeyDown = useCallback(
    (e) => {
      let delta = 0;
      const inc = e.shiftKey ? step * 4 : step;
      if (axisIsX) {
        if (e.key === "ArrowLeft") delta = -inc;
        if (e.key === "ArrowRight") delta = inc;
      } else {
        if (e.key === "ArrowUp") delta = -inc;
        if (e.key === "ArrowDown") delta = inc;
      }
      if (delta !== 0) {
        e.preventDefault();
        setSize((s) => clamp(s + delta));
      }
      if (e.key === "Home") {
        e.preventDefault();
        setSize(clamp(min));
      }
      if (e.key === "End") {
        e.preventDefault();
        setSize(clamp(max));
      }
    },
    [axisIsX, clamp, max, min, step]
  );

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", endDrag);
      document.removeEventListener("touchmove", onPointerMove);
      document.removeEventListener("touchend", endDrag);
    };
  }, [endDrag, onPointerMove]);

  return {
    size,
    setSize,
    handleProps: {
      onPointerDown,
      onTouchStart: onPointerDown,
      onKeyDown,
      className:
        "cursor-col-resize select-none bg-transparent outline-none focus:ring-2 focus:ring-blue-500/40 focus:ring-offset-2 focus:ring-offset-white transition-shadow",
      role: "separator",
      "aria-orientation": axisIsX ? "vertical" : "horizontal",
      "aria-label": "Resize panel",
      tabIndex: 0
    }
  };
}
