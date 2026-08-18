import { parseExcelRecords } from "./parseExcelRecords";
import { saveRecordsToDB } from "./saveRecordsToDB";
var XLSX = require("xlsx");

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

      const resultArray = parseExcelRecords(rows, mapObject, worksheet);
      
      await saveRecordsToDB(storageStringName, resultArray);

      alert(`Zapisano dane w ${storageStringName}`);
    };
  }
}
