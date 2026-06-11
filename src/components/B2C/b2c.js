import { useState } from "react";
import { Layout, Header, Tooltip } from "./styled";
import Collector from "./collector";
import CarExpander from "./carExpander";
import { useCarsData } from "../../hooks/useCarsData";
import { buildCarsViewModel } from "../../services/carsViewModel";

function B2C({ plates, setPlates }) {
  const { ewiCars, macadamCars, damageCars } = useCarsData();

  const [hovered, setHovered] = useState({ value: null, x: 0, y: 0 });

  const render = buildCarsViewModel(plates, ewiCars, macadamCars, damageCars);

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
