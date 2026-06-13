import { buildCarsViewModel } from "../services/carsViewModel";
import { useCarsData } from "./useCarsData";

export function useCarsViewModel(plates) {
  const { ewiCars, macadamCars, damageCars } = useCarsData();
  return buildCarsViewModel(plates, ewiCars, macadamCars, damageCars);
}
