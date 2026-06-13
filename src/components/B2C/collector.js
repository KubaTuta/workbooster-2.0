import { pickOutOnlyPlates } from "../../services/pickOutOnlyPlates";
import { CollectorLayout, Frame, TextWindow, ConfirmationButton } from "./styled";
import { useState } from "react";

function Collector({ plates, setPlates }) {
  const [textarea, setTextarea] = useState("");

  return (
    <CollectorLayout>
      <Frame>
        <TextWindow
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
        ></TextWindow>
        <ConfirmationButton onClick={()=>pickOutOnlyPlates(textarea, setPlates)}>OK</ConfirmationButton>
      </Frame>
    </CollectorLayout>
  );
}
export default Collector;
