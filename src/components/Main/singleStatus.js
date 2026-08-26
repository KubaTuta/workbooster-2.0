import { useCarsViewModel } from "../../hooks/useCarsViewModel";

function SingleStatus({plates}) {

    const carsViewModel = useCarsViewModel(plates);
    console.log(carsViewModel)
    return (
        <>

        </>
    )
}
export default SingleStatus;