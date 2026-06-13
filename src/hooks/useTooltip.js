import { useState } from "react";

export function useTooltip() {
  const [hovered, setHovered] = useState({ value: null, x: 0, y: 0 });
  return { hovered, setHovered };
}
