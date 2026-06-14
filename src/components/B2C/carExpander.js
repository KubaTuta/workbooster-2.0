import { useExpanderCar, toggleCar } from "../../hooks/useExpanderCar";
import { Row, Tile, Button, Details } from "./styled";
import { openDamageHyperlink, openHyperlink } from "../../utils/hyperlinks";
import { useTooltip } from "../../hooks/useTooltip";
import { formatDate } from "../../utils/formatDate";
import { getCellType } from "../../utils/getCellType";

function CarExpander({ carsViewModel, setHovered }) {
  const { expandedCar, toggleCar } = useExpanderCar();
  const { openTooltip, closeTooltip } = useTooltip();

  return (
    <>
      {carsViewModel.map((car, index) => (
        <Row key={car.plate}>
          {Object.entries(car).map(([key, value]) => {
            const uniqueKey = key + index;
            switch (getCellType(key)) {
              case "damages":
                return (
                  <Button
                    key={uniqueKey}
                    onClick={() => openDamageHyperlink(car.plate)}
                  >
                    {car?.damages ? car.damages.length : 0}
                  </Button>
                );

              case "date":
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
              case "hyperlink":
                return (
                  <Button
                    disabled={!value}
                    key={uniqueKey}
                    onClick={() => openHyperlink(value)}
                  >
                    EKSPERTYZA
                  </Button>
                );
              default:
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
            }
          })}
          {expandedCar === car.plate &&
            (car.damages.length > 0 ? (
              <Details>
                {car.damages.map((property, index) => (
                  <div key={index}>
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
