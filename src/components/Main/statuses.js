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
        <div key={car.plate}>
          <Plate plate={car.plate} />
          
        </div>
      ))}
    </>
  );
}
export default Statuses;
