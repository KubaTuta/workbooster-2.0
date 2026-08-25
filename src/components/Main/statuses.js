function Statuses({plates}) {
    return (
        <>
        {plates.map(plate=> (
            <div>
                {plate}
            </div>
        ))}
        </>
    )
}
export default Statuses;