import { useState } from "react";
import { Row, Tile, Button, Details } from "./styled";
import { commonMap } from "../Update/dataMaps";
import { openDamageHyperlink, openHyperlink } from "../../utils/hyperlinks";
import { openTooltip } from "../../utils/tooltip";

function CarExpander({ carsViewModel, hovered, setHovered }) {
  const [expandedCar, setExpandedCar] = useState(null);

  return (
    <>
      {carsViewModel.map((car, index) => (
        <Row key={car.plate}>
          {Object.entries(car).map(([key, value]) => {
            const uniqueKey = key + index;
            if (key === "damages") {
              return (
                <Button
                  key={uniqueKey}
                  onClick={() => openDamageHyperlink(car.plate)}
                >
                  {car?.damages ? car.damages.length : 0}
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
                  onMouseEnter={(e) =>
                    openTooltip(e, displayedDate, setHovered)
                  }
                  onMouseLeave={() => setHovered({ value: null, x: 0, y: 0 })}
                  isEven={index % 2 === 0}
                >
                  {displayedDate}
                </Tile>
              );
            } else if (commonMap[key]?.isHyperlink) {
              return (
                <Button
                  disabled={!value}
                  key={uniqueKey}
                  onClick={() => openHyperlink(value)}
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
                  onMouseEnter={(e) => openTooltip(e, value, setHovered)}
                  onMouseLeave={() => setHovered({ value: null, x: 0, y: 0 })}
                  isEven={index % 2 === 0}
                >
                  {value}
                </Tile>
              );
          })}
          {expandedCar === car.plate &&
            (car.damages.length > 0 ? (
              <Details>
                {car.damages.map((property) => (
                  <div>
                    {property.damageCost} PLN ----- {property.damageType} ----- {property.damageDate.trim()}
                  </div>
                ))}
              </Details>
            ) : (
              <Details>Brak zarejestrowanych szkód</Details>
            ))}
        </Row>
      ))}
    </>
  );
}
export default CarExpander;
