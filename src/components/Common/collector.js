import { pickOutOnlyPlates } from "../../services/pickOutOnlyPlates";
import { ConfirmationButton, CollectorLayout, Frame, TextWindow} from "./styled";
import { useState } from "react";

function Collector({ setPlates }) {
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
