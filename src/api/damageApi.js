import axios from "axios";
import { parseExcelRecords } from "../services/parseExcelRecords";
import { saveRecordsToDB } from "../services/saveRecordsToDB";

const XLSX = require("xlsx");

export async function downloadApi(url, mapObject, storageStringName) {
  try {
    const fileUrl = url;

    const response = await axios.get(fileUrl, {
      responseType: "arraybuffer",
    });

    const workbook = XLSX.read(response.data, {
      type: "array",
    });

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const range = XLSX.utils.decode_range(worksheet["!ref"]);
    const rows = range.e.r;

    const resultArray = parseExcelRecords(rows, mapObject, worksheet);

    saveRecordsToDB(storageStringName, resultArray);

    alert(`Zapisano dane w ${storageStringName}`);
  } catch (error) {
    console.error("Błąd podczas pobierania pliku:", error);
    alert("Nie udało się pobrać pliku.");
  }
}
