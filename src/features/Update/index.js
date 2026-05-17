import { useState } from "react";
var XLSX = require("xlsx");

function Update() {
  const [file, setFile] = useState([null]);
  const [data, setData] = useState([null]);

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
        console.log(workbook)

        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const range = XLSX.utils.decode_range(worksheet["!ref"]);
        const rows = range.e.r;
        
        for (let i=1; i <= rows; i++) {
            const cellA = worksheet[XLSX.utils.encode_cell({ r: i, c: 0 })];
            const cellB = worksheet[XLSX.utils.encode_cell({ r: i, c: 1 })];
        }
      };
    }
  }

  return (
    <div>
      <form>
        <input type="file" onChange={(event) => handleInput(event, 0)} />
        {file[0] && data[0] === null ? (
          <button onClick={() => handleConvertRecords()}>Konwertuj</button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
export default Update;
