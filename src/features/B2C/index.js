import { useEffect, useState } from "react";
import { downloadData } from "../../hooks/db";
import { Layout, Header, Tile, Tooltip, Button } from "./styled";
import { commonMap } from "../Update/dataMaps";
import Collector from "../Collector";

function B2C({ plates, setPlates }) {
  const [ewiCars, setEwiCars] = useState(new Map());
  const [macadamCars, setMacadamCars] = useState(new Map());
  const [damageCars, setDamageCars] = useState(new Map());
  const [hovered, setHovered] = useState({ value: null, x: 0, y: 0 });
  const [isModal, setIsModal] = useState(false);

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
        damageCost: damageCar
          ? damageCar.map((damage) => damage.damageCost)
          : "",
      };
    })
    .filter(Boolean);

  function openTooltip(e, value) {
    setHovered({
      value,
      x: e.clientX,
      y: e.clientY,
    });
  }

  function openHyperlink(address) {
    window.open(address, "_blank");
  }

  return (
    <>
      <Collector plates={plates} setPlates={setPlates} />
      <Layout>
        <>
          {Object.keys(render?.[0] || {}).map((key) => (
            <Header key={key}>{key.toUpperCase()}</Header>
          ))}
        </>
        <>
          {render.map((car, index) => {
            return Object.entries(car).map(([key, value]) => {
              const uniqueKey = key + index;
              if (commonMap[key]?.isArrayValue) {
                const damages = damageCars.get(car.plate) || [];

                return (
                  <Button disabled={value.length > 0 ? false : true}
                    key={uniqueKey}
                    onClick={()=>console.log(damages)}
                  >
                    {value.length}
                  </Button>
                );
              } else if (commonMap[key]?.isDate) {
                const formattedDate = new Date(value).toLocaleDateString(
                  "pl-PL",
                );
                const displayedDate =
                  formattedDate === "Invalid Date" ? value : formattedDate;
                return (
                  <Tile
                    key={uniqueKey}
                    onMouseEnter={(e) => openTooltip(e, displayedDate)}
                    onMouseLeave={() => setHovered({ value: null, x: 0, y: 0 })}
                  >
                    {displayedDate}
                  </Tile>
                );
              } else if (commonMap[key]?.isHyperlink) {
                return (
                  <Button key={uniqueKey} onClick={(e) => openHyperlink(value)}>
                    EKSPERTYZA
                  </Button>
                );
              } else
                return (
                  <Tile
                    key={uniqueKey}
                    onMouseEnter={(e) => openTooltip(e, value)}
                    onMouseLeave={() => setHovered({ value: null, x: 0, y: 0 })}
                  >
                    {value}
                  </Tile>
                );
            });
          })}
        </>
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
