import { use, useEffect, useState } from "react";
import { downloadData } from "../../hooks/db";
import { Layout, Tile } from "./styled";

function B2C() {
  // const macadamMap = new Map(parsedMacadam.map((item) => [item.plate, item]));
  const [cars, setCars] = useState([]);
  const [macadamCars, setMacadamCars] = useState(new Map());

  useEffect(() => {
    async function loadData() {
      const data = await downloadData("Ewidencja");

      setCars(data);
    }
    loadData();
  }, []);
  useEffect(() => {
    async function loadData() {
      const data = await downloadData("Ekspertyzy");

      setMacadamCars(data);
    }
    loadData();
  }, []);

  console.log(cars[0]);
  console.log(macadamCars)
  // console.log(data[0])

  // const renderedData = parsedEwi
  //   .filter((singleVehicle) => macadamMap.has(singleVehicle.plate))
  //   .map((singleVehicle) => {
  //     const macadamVehicle = macadamMap.get(singleVehicle.plate);
  //     return {
  //       plate: singleVehicle.plate,
  //       vin: singleVehicle.vin,
  //       company: singleVehicle.company,
  //       collectionDate: singleVehicle.collectionDate,
  //       brand: singleVehicle.brand,
  //       body: singleVehicle.body,
  //       version: singleVehicle.version,
  //       fuel: singleVehicle.fuel,
  //       color: singleVehicle.color,
  //       mileage: singleVehicle.mileage,
  //       prodYear: singleVehicle.prodYear,
  //       firstRegNb: singleVehicle.firstRegNb,
  //       damage: singleVehicle.damage,
  //       comment: singleVehicle.comment,
  //       eurotax: singleVehicle.eurotax,
  //       eurotaxDate: singleVehicle.eurotaxDate,
  //       reservation: singleVehicle.reservation,
  //       rvStat: singleVehicle.rvStat,
  //       refurbishment: singleVehicle.refurbishment,
  //       link: macadamVehicle.macadamWithPrice,
  //     };
  //   });

  return (
    // <Layout>
    888
  );
}
export default B2C;
