export function buildCarsViewModel(plates, ewiCars, macadamCars, damageCars) {
  const render = plates
    .map((plate) => {
      const ewiCar = ewiCars.get(plate);
      const macadamCar = macadamCars.get(plate);
      const damageCar = damageCars.get(plate);

      return {
        plate: ewiCar?.plate,
        vin: ewiCar?.vin,
        company: ewiCar?.company,
        collectionDate: ewiCar?.collectionDate,
        brand: ewiCar?.brand,
        body: ewiCar?.body,
        version: ewiCar?.version,
        fuel: ewiCar?.fuel,
        color: ewiCar?.color,
        mileage: ewiCar?.mileage,
        prodYear: ewiCar?.prodYear,
        firstRegDate: ewiCar?.firstRegDate,
        damage: ewiCar?.damage,
        comment: ewiCar?.comment,
        eurotax: ewiCar?.eurotaxValue,
        eurotaxDate: ewiCar?.eurotaxDate,
        reservation: ewiCar?.reservation,
        rvStat: ewiCar?.rvStat,
        refurbishment: ewiCar?.refurbishment,
        macadamWithPrice: macadamCar?.macadamWithPrice,
        damages: damageCar || [],
      };
    })
    .filter(Boolean);

  return render;
}