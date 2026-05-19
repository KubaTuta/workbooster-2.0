import { Layout, Tile } from "./styled";

function B2C() {
  const parsedData = JSON.parse(localStorage.getItem("ekspertyzy")) || [];

  return (
    <Layout>
      {parsedData.map((singleVehicle) => (
        <>
          <Tile>{singleVehicle.plate}</Tile>
          <Tile>{singleVehicle.vin}</Tile>
        </>
      ))}
    </Layout>
  );
}
export default B2C;