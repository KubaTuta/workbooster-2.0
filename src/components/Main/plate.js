function Plate({ plates }) {
  return (
    <>
      {plates.map((plate) => (
        <div>{plate}</div>
      ))}
    </>
  );
}
export default Plate;