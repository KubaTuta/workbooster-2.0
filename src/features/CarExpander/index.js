import { Row, Tile, Button, Details } from "./styled";
import { useState } from "react";
import { commonMap } from "../Update/dataMaps";

function CarExpander({ render, hovered, setHovered }) {
  const [expandedCar, setExpandedCar] = useState(null);

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
      {render.map((car, index) => (
        <Row key={car.plate}>
          {Object.entries(car).map(([key, value]) => {
            const uniqueKey = key + index;
            if (commonMap[key]?.isArrayValue) {
              return (
                <Button key={uniqueKey} onClick={() => console.log(key[value])}>
                  sfdaf
                </Button>
              );
            } else if (commonMap[key]?.isDate) {
              const formattedDate = new Date(value).toLocaleDateString("pl-PL");
              const displayedDate =
                formattedDate === "Invalid Date" ? value : formattedDate;
              return (
                <Tile
                  key={uniqueKey}
                  onClick={() =>
                    setExpandedCar(expandedCar === car.plate ? null : car.plate)
                  }
                  onMouseEnter={(e) => openTooltip(e, displayedDate)}
                  onMouseLeave={() => setHovered({ value: null, x: 0, y: 0 })}
                >
                  {displayedDate}
                </Tile>
              );
            } else if (commonMap[key]?.isHyperlink) {
              return (
                <Button
                  disabled={!value}
                  key={uniqueKey}
                  onClick={(e) => openHyperlink(value)}
                >
                  EKSPERTYZA
                </Button>
              );
            } else
              return (
                <Tile
                  key={uniqueKey}
                  onClick={() =>
                    setExpandedCar(expandedCar === car.plate ? null : car.plate)
                  }
                  onMouseEnter={(e) => openTooltip(e, value)}
                  onMouseLeave={() => setHovered({ value: null, x: 0, y: 0 })}
                >
                  {value}
                </Tile>
              );
          })}
          {expandedCar === car.plate && <Details>rozwinięte</Details>}
        </Row>
      ))}
    </>
  );
}
export default CarExpander;
