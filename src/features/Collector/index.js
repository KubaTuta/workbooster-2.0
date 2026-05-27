import { Layout, Frame, TextWindow, ConfirmationButton } from "./styled";
import { useState } from "react";

function Collector() {
  const [textarea, setTextarea] = useState("");

  return (
    <Layout>
      <Frame>
        <TextWindow
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
        ></TextWindow>
        <ConfirmationButton>button</ConfirmationButton>
      </Frame>
    </Layout>
  );
}
export default Collector;
