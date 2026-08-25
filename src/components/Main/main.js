import Collector from "../Common/collector";
import Statuses from "./statuses";

function Main({ plates, setPlates }) {
  return (
    <>
      <Collector setPlates={setPlates} />
      <Statuses plates={plates}/>
    </>
  );
}
export default Main;
