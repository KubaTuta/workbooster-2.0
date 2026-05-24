import { useEffect, useState } from "react";
import { downloadData } from "../../hooks/db";
import { Layout, Tile } from "./styled";

function B2C() {
  const [ewiCars, setEwiCars] = useState([]);
  const [macadamCars, setMacadamCars] = useState(new Map());
  const [hovered, setHovered] = useState({ value: null, x: 0, y: 0 });

  useEffect(() => {
    async function loadData() {
      const data = await downloadData("Ewidencja");

      setEwiCars(data);
    }
    loadData();
  }, []);

  useEffect(() => {
    async function loadData() {
      const data = await downloadData("Ekspertyzy");

      const dataMap = new Map(data.map((car) => [car.plate, car]));
      setMacadamCars(dataMap);
    }
    loadData();
  }, []);

  const renderedData = ewiCars
    .filter((ewiCar) => macadamCars.has(ewiCar.plate))
    .map((ewiCar) => {
      const macadamCar = macadamCars.get(ewiCar.plate);
      return {
        plate: ewiCar.plate,
        vin: ewiCar.vin,
        company: ewiCar.company,
        collectionDate: ewiCar.collectionDate,
        brand: ewiCar.brand,
        body: ewiCar.body,
        version: ewiCar.version,
        fuel: ewiCar.fuel,
        color: ewiCar.color,
        mileage: ewiCar.mileage,
        prodYear: ewiCar.prodYear,
        firstRegNb: ewiCar.firstRegNb,
        damage: ewiCar.damage,
        comment: ewiCar.comment,
        eurotax: ewiCar.eurotax,
        eurotaxDate: ewiCar.eurotaxDate,
        reservation: ewiCar.reservation,
        rvStat: ewiCar.rvStat,
        refurbishment: ewiCar.refurbishment,
        macadamWithPrice: macadamCar.macadamWithPrice,
      };
    });

  function openTooltip(e, value) {
    setHovered({
      value,
      x: e.clientX,
      y: e.clientY,
    });
  }

  return (
    <Layout>
      <>
        {renderedData.map((car, index) => {
          return Object.entries(car).map(([key, value]) => (
            <Tile
              key={key}
              onMouseEnter={(e) => openTooltip(e, value)}
              onMouseLeave={() => setHovered({ value: null, x: 0, y: 0 })}
            >
              {value}
            </Tile>
          ));
        })}
      </>
    </Layout>
  );
}
export default B2C;
