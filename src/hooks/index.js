import { db } from "./db";
var XLSX = require("xlsx");

export function excelDateToISO(excelDate) {
  if (typeof excelDate === "string") {
    return excelDate;
  }

  return new Date((excelDate - 25569) * 86400 * 1000).toISOString();
}

export function handleConvertRecords(
  event,
  slotNumber,
  mapObject,
  storageStringName,
  file,
) {
  if (file[slotNumber]) {
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(file[slotNumber]);
    fileReader.onload = async (e) => {
      const fileData = e.target.result;
      const workbook = XLSX.read(fileData, { type: "binary" });

      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const range = XLSX.utils.decode_range(worksheet["!ref"]);
      const rows = range.e.r;
      const resultArray = [];

      for (let i = 0; i <= rows; i++) {
        const singleCar = {};

        Object.entries(mapObject).forEach(([carProperty, config]) => {
          const cell =
            worksheet[XLSX.utils.encode_cell({ r: i, c: config.column })];

          let cellValue = cell ? cell.v : undefined;

          if (cellValue && config.isDate) {
            cellValue = excelDateToISO(cellValue);
          }

          singleCar[carProperty] = cellValue;
        });

        if (singleCar.plate) {
          resultArray.push(singleCar);
        }
      }

      await db.table(storageStringName).bulkPut(resultArray);

      alert(`Zapisano dane w ${storageStringName}`);
    };
  }
}
