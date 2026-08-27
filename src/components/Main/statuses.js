import { Container } from "./styled";
import Plate from "./plate";
import Vin from "./vin";
import FirstReg from "./firstReg";
import Invoice from "./invoice";
import Oc from "./oc";
import OcEndDate from "./ocEndDate";

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
          <Vin vin={car.vin} />
          <FirstReg firstReg={car.firstRegDate} />
          <Invoice status={car.status} />
          <Oc insurer={car.insurer} />
          <OcEndDate expirationDate={car.ocExpirationDate} />
        </Container>
      ))}
    </>
  );
}
export default Statuses;
