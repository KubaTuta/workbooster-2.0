import Plate from "./plate";
import SingleStatus from "./singleStatus";

function Statuses({plates}) {
    return (
        <>
        <Plate plates={plates} />
        <SingleStatus plates={plates} />
        </>
    )
}
export default Statuses;