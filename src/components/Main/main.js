import { useCarsToSellViewModel } from "../../hooks/useCarsToSellViewModel";
import Collector from "../Common/collector";
import Statuses from "./statuses";

function Main({ plates, setPlates }) {
  const carsToSellViewModel = useCarsToSellViewModel(plates);

  console.log(carsToSellViewModel);

  return (
    <>
      <Collector setPlates={setPlates} />
      <Statuses plates={plates} />
    </>
  );
}
export default Main;
