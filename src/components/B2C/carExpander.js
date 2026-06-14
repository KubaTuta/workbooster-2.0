import { useExpanderCar, toggleCar } from "../../hooks/useExpanderCar";
import { Row, Tile, Button, Details } from "./styled";
import { commonMap } from "../Update/dataMaps";
import { openDamageHyperlink, openHyperlink } from "../../utils/hyperlinks";
import { useTooltip } from "../../hooks/useTooltip";
import { formatDate } from "../../utils/formatDate";

function CarExpander({ carsViewModel, setHovered }) {
  const { expandedCar, toggleCar } = useExpanderCar();
  const { openTooltip, closeTooltip } = useTooltip();

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
              return (
                <Tile
                  key={uniqueKey}
                  onClick={() => toggleCar(car.plate)}
                  onMouseEnter={(e) =>
                    openTooltip(e, formatDate(value), setHovered)
                  }
                  onMouseLeave={() => closeTooltip(setHovered)}
                  iseven={index % 2 === 0}
                >
                  {formatDate(value)}
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
                  onClick={() => toggleCar(car.plate)}
                  onMouseEnter={(e) => openTooltip(e, value, setHovered)}
                  onMouseLeave={() => closeTooltip(setHovered)}
                  iseven={index % 2 === 0}
                >
                  {value}
                </Tile>
              );
          })}
          {expandedCar === car.plate &&
            (car.damages.length > 0 ? (
              <Details>
                {car.damages.map((property, index) => (
                  <div key={index}>
                    {property.damageCost} PLN ----- {property.damageType} -----{" "}
                    {property.damageDate.trim()}
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
