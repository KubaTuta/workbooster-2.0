import { useEffect, useState } from "react";
import { downloadData } from "./db";

export function useCarsData() {
  const [ewiCars, setEwiCars] = useState(new Map());
  const [macadamCars, setMacadamCars] = useState(new Map());
  const [damageCars, setDamageCars] = useState(new Map());

  async function loadData(dbName, setter) {
    const data = await downloadData(dbName);
    const dataMap = new Map(data.map((car) => [car.plate, car]));
    setter(dataMap);
  }

  useEffect(() => {
    loadData("Ewidencja", setEwiCars);
  }, []);

  useEffect(() => {
    loadData("Ekspertyzy", setMacadamCars);
  }, []);

  function createDamageMap(cars) {
    const map = new Map();

    for (const car of cars) {
      const foundedCar = map.get(car.plate) || [];
      foundedCar.push(car);
      map.set(car.plate, foundedCar);
    }

    return map;
  }

  useEffect(() => {
    async function loadData() {
      const data = await downloadData("Szkody");
      const dataMap = createDamageMap(data);
      setDamageCars(dataMap);
    }
    loadData();
  }, []);

  return {
    ewiCars,
    macadamCars,
    damageCars,
  };
}