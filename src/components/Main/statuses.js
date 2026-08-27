import { Container } from "./styled";
import Plate from "./plate";

import { useCarsToSellViewModel } from "../../hooks/useCarsToSellViewModel";

function Statuses({ plates }) {
  const carsToSellViewModel = useCarsToSellViewModel(plates);

  console.log(carsToSellViewModel);
  console.log(plates);
  return (
    <>
      {carsToSellViewModel.map((car) => (
        <Container key={car.plate}>
          <Plate plate={car.plate} />
        </Container>
      ))}
    </>
  );
}
export default Statuses;
