import { useState } from "react";
import { ewiMap, macadamMap } from "./dataMaps";
import { handleConvertRecords } from "../../hooks";

function Update() {
  const [file, setFile] = useState([null, null]);

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
        <>
        <input type="file" onChange={(event) => handleInput(event, 0)} />
        {file[0] !== null ? (
          <button onClick={() => handleConvertRecords(0, ewiMap, "Ewidencja", file)}>Zapisz</button>
        ) : (
          ""
        )}
        </>
        <>
        <input type="file" onChange={(event) => handleInput(event, 1)} />
        {file[1] !== null ? (
          <button onClick={() => handleConvertRecords(1, macadamMap, "Ekspertyzy", file)}>Zapisz</button>
        ) : (
          ""
        )}
        </>
        
      </form>
    </div>
  );
}
export default Update;