import { buildCarsToSellViewModel } from "../services/carsToSellViewModel";
import { useCarsData } from "./useCarsData";

export function useCarsToSellViewModel(plates) {
  const { ewiCars } = useCarsData();
  return buildCarsToSellViewModel(plates, ewiCars);
}