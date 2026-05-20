import { useState } from "react";
var XLSX = require("xlsx");

function Update() {
  const [file, setFile] = useState([null]);

  const columnPosition = {
    plate: { column: 0 },
    vin: { column: 1 },
    status: { column: 2 },
    company: { column: 3 },
    collectionDate: {
      column: 4,
      isDate: true,
    },
    brand: { column: 5 },
    model: { column: 6 },
    body: { column: 7 },
    version: { column: 8 },
    fuel: { column: 9 },
    color: { column: 10 },
    mileage: { column: 11 },
    prodYear: { column: 12 },
    firstRegDate: {
      column: 13,
      isDate: true,
    },
    keysNb: { column: 15 },
    damages: { column: 17 },
    comment: { column: 18 },
    eurotaxValue: { column: 19 },
    eurotaxNb: { column: 20 },
    eurotaxDate: {
      column: 21,
      isDate: true,
    },
    reservation: { column: 22 },
    rvStat: { column: 23 },
    auctionPricePlusFee: { column: 24 },
    fee: { column: 25 },
    salesPriceNoFee: { column: 26 },
    salesChannel: { column: 30 },
    buyersData: { column: 31 },
    vatId: { column: 32 },
    proformaDate: {
      column: 33,
      isDate: true,
    },
    paymentDate: {
      column: 34,
      isDate: true,
    },
    nac: { column: 35 },
    invoiceNb: { column: 36 },
    invoiceDate: {
      column: 37,
      isDate: true,
    },
    insurer: { column: 39 },
    ocExpirationDate: {
      column: 40,
      isDate: true,
    },
    refurbrishment: { column: 45 },
    b2cPrice: { column: 47 },
    priceAcceptance: { column: 51 },
    location: { column: 60 },
  };

  function handleInput(event, number) {
    setFile((prevFile) => {
      const fileArray = [...prevFile];
      fileArray[number] = event.target.files[0];
      return fileArray;
    });
  }

  function excelDateToISO(excelDate) {
    return (new Date((excelDate - 25569) * 86400 * 1000)).toISOString()
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

          Object.entries(columnPosition).forEach(([carProperty, config]) => {
            const cell = worksheet[XLSX.utils.encode_cell({ r: i, c: config.column })];
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
