import { useState } from "react";

export function useTooltip() {
  const [hovered, setHovered] = useState({ value: null, x: 0, y: 0 });

  function openTooltip(e, value, setHovered) {
    setHovered({
      value,
      x: e.clientX,
      y: e.clientY,
    });
  }

  function closeTooltip() {
    setHovered({ value: null, x: 0, y: 0 });
  }

  return { hovered, setHovered, openTooltip, closeTooltip };
}
