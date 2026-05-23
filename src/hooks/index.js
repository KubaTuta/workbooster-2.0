import Dexie from "dexie";
var XLSX = require("xlsx");

export function excelDateToISO(excelDate) {
  if (typeof excelDate === "string") {
    return excelDate;
  }

  return new Date((excelDate - 25569) * 86400 * 1000).toISOString();
}

export function handleConvertRecords(
  slotNumber,
  mapObject,
  storageStringName,
  file,
) {
  const indexedDataBase = new Dexie("CarsDatabase");

  indexedDataBase.version(1).stores({
    [storageStringName]: "++id, plate, vin",
  });

  if (file[slotNumber]) {
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(file[slotNumber]);
    fileReader.onload = async (event) => {
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

      await indexedDataBase.table(storageStringName).bulkPut(resultArray);

      alert(`Zapisano dane w ${storageStringName}`);
    };
  }
}
