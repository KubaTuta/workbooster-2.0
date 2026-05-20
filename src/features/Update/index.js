import { useState } from "react";
var XLSX = require("xlsx");

function Update() {
  const [file, setFile] = useState([null]);

  const columnPosition = {
    plate: 0,
    vin: 1,
    status: 2,
    company: 3,
    collectionDate: 4,
    brand: 5,
    model: 6,
    body: 7,
    version: 8,
    fuel: 9,
    color: 10,
    mileage: 11,
    prodYear: 12,
    firstRegDate: 13,
    keysNb: 15,
    damages: 17,
    comment: 18,
    eurotaxValue: 19,
    eurotaxNb: 20,
    eurotaxDate: 21,
    reservation: 22,
    rvStat: 23,
    auctionPricePlusFee: 24,
    fee: 25,
    salesPriceNoFee: 26,
    salesChannel: 30,
    buyersData: 31,
    vatId: 32,
    proformaDate: 33,
    paymentDate: 34,
    nac: 35,
    invoiceNb: 36,
    invoiceDate: 37,
    insurer: 39,
    ocExpirationDate: 40,
    refurbrishment: 45,
    b2cPrice: 47,
    priceAcceptance: 51,
    location: 60,
  };

  function handleInput(event, number) {
    setFile((prevFile) => {
      const fileArray = [...prevFile];
      fileArray[number] = event.target.files[0];
      return fileArray;
    });
  }

  function handleConvertRecords() {
    if (file[0]) {
      const fileReader = new FileReader();
      fileReader.readAsBinaryString(file[0]);
      fileReader.onload = (event) => {
        const fileData = event.target.result;
        const workbook = XLSX.read(fileData, { type: "binary" });

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const range = XLSX.utils.decode_range(worksheet["!ref"]);
        const rows = range.e.r;
        const resultArray = [];

        for (let i = 0; i <= rows; i++) {
          const singleCar = {
            id: i + 1,
          };

          Object.entries(columnPosition).forEach(([carProperty, column]) => {
            const cell = worksheet[XLSX.utils.encode_cell({ r: i, c: column })];
            singleCar[carProperty] = cell ? cell.v : undefined;
          });

          if (singleCar.plate) {
            resultArray.push(singleCar)
          }
        }

        localStorage.setItem("ewidencja", JSON.stringify(resultArray));
        alert("Zapisano");
      };
    }
  }

  return (
    <div>
      <form>
        <input type="file" onChange={(event) => handleInput(event, 0)} />
        {file[0] !== null ? (
          <button onClick={() => handleConvertRecords()}>Zapisz</button>
        ) : (
          ""
        )}
        {console.log(file)}
      </form>
    </div>
  );
}
export default Update;
