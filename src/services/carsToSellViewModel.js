// tworzy gotowy model do renderu 

export function buildCarsToSellViewModel(plates, ewiCars) {

  const carsToSellViewModel = plates
    .map((plate) => {
      const ewiCar = ewiCars.get(plate);

      return {
        plate: ewiCar?.plate,
        vin: ewiCar?.vin,
        firstRegDate: ewiCar?.firstRegDate,
        status: ewiCar?.status,
        insurer: ewiCar?.insurer,
        ocExpirationDate: ewiCar?.ocExpirationDate,

      };
    })
    .filter(Boolean);

  return carsToSellViewModel;
}
