import { useState } from "react";

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
