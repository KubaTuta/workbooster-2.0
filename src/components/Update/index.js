import { useState } from "react";
import { handleConvertRecords } from "../../services/dataUpload";
import { FileGrid } from "./styled";
import { filesConfig } from "../../constants/filesConfig";

function Update() {
  const [file, setFile] = useState([null, null, null]);

  function handleInput(e, number) {
    setFile((prevFile) => {
      const fileArray = [...prevFile];
      fileArray[number] = e.target.files[0];
      return fileArray;
    });
  }

  return (
    <FileGrid>
      {filesConfig.map((item, index) => (
        <div key={item.label}>
          <h2>{item.label}</h2>
          <input type="file" onChange={(e) => handleInput(e, index)} />
          {file[index] !== null ? (
            <button
              onClick={(e) =>
                handleConvertRecords(e, index, item.map, item.table, file)
              }
            >
              Zapisz
            </button>
          ) : (
            ""
          )}
        </div>
      ))}
    </FileGrid>
  );
}
export default Update;
