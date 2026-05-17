import { useState } from "react";

function Update() {

    const [file, setFile] = useState([null, null, null]);

    const handleInput = (event, number) => {
    setFile((prevFile) => {
      const fileArray = [...prevFile];
      fileArray[number] = event.target.files[0];
      return fileArray;
    });
  };
    return (
        <div>
            <form>
                <input type="file" onChange={(event) => handleInput(event, 0)}/>
            </form>
        </div>
    )
} export default Update;