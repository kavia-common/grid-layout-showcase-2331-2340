import { useCallback, useRef, useState } from "react";

/**
 * Simple resizable hook.
 * Usage:
 * const { size, handleProps } = useResizable({ initial: 320, min: 200, max: 720 });
 * <div style={{ width: size }} />
 * <div {...handleProps} />
 */

// PUBLIC_INTERFACE
export function useResizable({ initial = 320, min = 200, max = 720, axis = "x" } = {}) {
  const [size, setSize] = useState(initial);
  const startRef = useRef({ start: 0, size });

  const onPointerDown = useCallback((e) => {
    startRef.current = {
      start: axis === "x" ? e.clientX : e.clientY,
      size
    };
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
  }, [size, axis]);

  const onPointerMove = useCallback((e) => {
    const delta =
      (axis === "x" ? e.clientX : e.clientY) - startRef.current.start;
    const next = Math.max(min, Math.min(max, startRef.current.size + delta));
    setSize(next);
  }, [axis, min, max]);

  const onPointerUp = useCallback(() => {
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerUp);
  }, [onPointerMove]);

  return {
    size,
    setSize,
    handleProps: {
      onPointerDown,
      className:
        "cursor-col-resize select-none bg-transparent",
      role: "separator",
      "aria-orientation": axis === "x" ? "vertical" : "horizontal",
      tabIndex: 0
    }
  };
}
