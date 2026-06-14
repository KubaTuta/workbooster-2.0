import { excelDateToISO } from "../utils/excelDateToISO";
var XLSX = require("xlsx");

export function parseExcelRecords(rows, mapObject, worksheet) {
  const resultArray = [];

  for (let i = 0; i <= rows; i++) {
    const singleCar = {};

    Object.entries(mapObject).forEach(([carProperty, config]) => {
      const cell =
        worksheet[XLSX.utils.encode_cell({ r: i, c: config.column })];

      let cellValue = cell ? cell.v : undefined;

      if (cellValue && config.isDate) {
        cellValue = excelDateToISO(cellValue);
      } else if (typeof cellValue === "number") {
        cellValue = cellValue.toFixed(0);
      }

      singleCar[carProperty] = cellValue;
    });

    if (singleCar.plate) {
      resultArray.push(singleCar);
    }
  }
  return resultArray;
}