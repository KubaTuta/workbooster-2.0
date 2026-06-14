export function openTooltip(e, value, setHovered) {
  setHovered({
    value,
    x: e.clientX,
    y: e.clientY,
  });
}
