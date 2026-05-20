import { Layout, Tile } from "./styled";

function B2C() {
  const parsedEwi = JSON.parse(localStorage.getItem("Ewidencja")) || [];
  const parsedMacadam = JSON.parse(localStorage.getItem("Ekspertyzy")) || [];

  const macadamMap = new Map(parsedMacadam.map((item) => [item.plate, item]));

  const renderedData = parsedEwi
    .filter((singleVehicle) => macadamMap.has(singleVehicle.plate))
    .map((singleVehicle) => {
      const macadamVehicle = macadamMap.get(singleVehicle.plate);
      return {
        plate: singleVehicle.plate,
        vin: singleVehicle.vin,
        company: singleVehicle.company,
        collectionDate: singleVehicle.collectionDate,
        brand: singleVehicle.brand,
        body: singleVehicle.body,
        version: singleVehicle.version,
        fuel: singleVehicle.fuel,
        color: singleVehicle.color,
        mileage: singleVehicle.mileage,
        prodYear: singleVehicle.prodYear,
        firstRegNb: singleVehicle.firstRegNb,
        damage: singleVehicle.damage,
        comment: singleVehicle.comment,
        eurotax: singleVehicle.eurotax,
        eurotaxDate: singleVehicle.eurotaxDate,
        reservation: singleVehicle.reservation,
        rvStat: singleVehicle.rvStat,
        refurbishment: singleVehicle.refurbishment,
        link: macadamVehicle.macadamWithPrice,
      }
    });

  return (
    <Layout>
      {renderedData.map((singleVehicle) => (
        <>
          <Tile>{singleVehicle.plate}</Tile>
          <Tile>{singleVehicle.vin}</Tile>
          <Tile>{singleVehicle.company}</Tile>
          <Tile>{singleVehicle.collectionDate}</Tile>
          <Tile>{singleVehicle.brand}</Tile>
          <Tile>{singleVehicle.body}</Tile>
          <Tile>{singleVehicle.version}</Tile>
          <Tile>{singleVehicle.color}</Tile>
          <Tile>{singleVehicle.mileage}</Tile>
          <Tile>{singleVehicle.prodYear}</Tile>
          <Tile>{singleVehicle.firstRegNb}</Tile>
          <Tile>{singleVehicle.damage}</Tile>
          <Tile>{singleVehicle.comment}</Tile>
          <Tile>{singleVehicle.eurotax}</Tile>
          <Tile>{singleVehicle.eurotaxDate}</Tile>
          <Tile>{singleVehicle.reservation}</Tile>
          <Tile>{singleVehicle.rvStat}</Tile>
          <Tile>{singleVehicle.refurbishment}</Tile>
          <Tile>{singleVehicle.link}</Tile>
         
        </>
      ))}
    </Layout>
  );
}
export default B2C;
