import { useState } from "react";
import { ewiMap } from "./dataMaps";
import { handleConvertRecords } from "../../hooks";

function Update() {
  const [file, setFile] = useState([null]);

  function handleInput(event, number) {
    setFile((prevFile) => {
      const fileArray = [...prevFile];
      fileArray[number] = event.target.files[0];
      return fileArray;
    });
  }  

  return (
    <div>
      <form>
        <input type="file" onChange={(event) => handleInput(event, 0)} />
        {file[0] !== null ? (
          <button onClick={() => handleConvertRecords(0, ewiMap, "Ewindencja", file)}>Zapisz</button>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
export default Update;