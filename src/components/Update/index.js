import { useState } from "react";
import { damageMap, ewiMap, macadamMap } from "../../constants/dataMaps"
import { handleConvertRecords } from "../../services/dataUpload";
import { DB_TABLES } from "../../constants/dbTables";

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
    <div>
      <form>
        <>
          <input type="file" onChange={(e) => handleInput(e, 0)} />
          {file[0] !== null ? (
            <button
              onClick={(e) =>
                handleConvertRecords(e, 0, ewiMap, DB_TABLES.EWI, file)
              }
            >
              Zapisz
            </button>
          ) : (
            ""
          )}
        </>
        <>
          <input type="file" onChange={(e) => handleInput(e, 1)} />
          {file[1] !== null ? (
            <button
              onClick={(e) =>
                handleConvertRecords(e, 1, macadamMap, DB_TABLES.MACADAM, file)
              }
            >
              Zapisz
            </button>
          ) : (
            ""
          )}
        </>
        <>
          <input type="file" onChange={(e) => handleInput(e, 2)} />
          {file[2] !== null ? (
            <button
              onClick={(e) =>
                handleConvertRecords(e, 2, damageMap, DB_TABLES.DAMAGE, file)
              }
            >
              Zapisz
            </button>
          ) : (
            ""
          )}
        </>
      </form>
    </div>
  );
}
export default Update;
