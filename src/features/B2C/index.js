import { useEffect, useState } from "react";
import { downloadData } from "../../hooks/db";
import { Layout, Header, Tooltip } from "./styled";
import Collector from "../Collector";
import CarExpander from "../CarExpander";

function B2C({ plates, setPlates }) {
  const [ewiCars, setEwiCars] = useState(new Map());
  const [macadamCars, setMacadamCars] = useState(new Map());
  const [damageCars, setDamageCars] = useState(new Map());
  const [hovered, setHovered] = useState({ value: null, x: 0, y: 0 });

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
        damageCost: damageCar?.damageCost,
        // ? damageCar.map((damage) => damage.damageCost)
        // : "",
      };
    })
    .filter(Boolean);

  return (
    <>
      <Collector plates={plates} setPlates={setPlates} />
      <Layout>
        <>
          {Object.keys(render?.[0] || {}).map((key) => (
            <Header key={key}>{key.toUpperCase()}</Header>
          ))}
        </>
        <CarExpander
          render={render}
          hovered={hovered}
          setHovered={setHovered}
        />
        <>
          {hovered.value !== (null || undefined) && (
            <Tooltip x={hovered.x} y={hovered.y}>
              {hovered.value}
            </Tooltip>
          )}
        </>
      </Layout>
    </>
  );
}
export default B2C;
