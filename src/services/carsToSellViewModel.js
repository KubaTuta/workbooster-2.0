// tworzy gotowy model do renderu 

export function buildCarsToSellViewModel(plates, ewiCars) {

  const carsToSellViewModel = plates
    .map((plate) => {
      const ewiCar = ewiCars.get(plate);

      return {
        plate: ewiCar?.plate,
        vin: ewiCar?.vin,
        status: ewiCar?.status,
      };
    })
    .filter(Boolean);

  return carsToSellViewModel;
}
