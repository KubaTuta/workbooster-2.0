import { useState } from "react";
import { handleConvertRecords } from "../../services/dataUpload";
import { FileGrid, FileCard, InputButton } from "./styled";
import { filesConfig } from "../../constants/filesConfig";
import { ConfirmationButton } from "../Common/styled";

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
        <FileCard key={item.label}>
          <h2>{item.label}</h2>
          <InputButton type="file" onChange={(e) => handleInput(e, index)} />
          {file[index] !== null ? (
            <ConfirmationButton
              onClick={(e) =>
                handleConvertRecords(e, index, item.map, item.table, file)
              }
            >
              Zapisz
            </ConfirmationButton>
          ) : (
            ""
          )}
        </FileCard>
      ))}
    </FileGrid>
  );
}
export default Update;
