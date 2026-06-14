import { useState } from "react";

export function useExpanderCar() {
  const [expandedCar, setExpandedCar] = useState(null);

  function toggleCar(plate) {
    setExpandedCar((prev) => (prev === plate ? null : plate));
  }

  return {
    expandedCar,
    toggleCar,
  };
}
