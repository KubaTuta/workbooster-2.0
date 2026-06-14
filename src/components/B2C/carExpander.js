import { useExpanderCar } from "../../hooks/useExpanderCar";
import { useTooltip } from "../../hooks/useTooltip";
import { formatDate } from "../../utils/formatDate";
import { getCellType } from "../../utils/getCellType";
import { openDamageHyperlink, openHyperlink } from "../../utils/hyperlinks";
import DamageDetails from "./damageDetails";
import { Button, Row, Tile } from "./styled";

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
          {expandedCar === car.plate && <DamageDetails car={car} />}
        </Row>
      ))}
    </>
  );
}
export default CarExpander;
