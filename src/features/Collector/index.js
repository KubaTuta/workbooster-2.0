import { Layout, Frame, TextWindow, ConfirmationButton } from "./styled";
import { useState } from "react";

function Collector({ plates, setPlates }) {
  const [textarea, setTextarea] = useState("");

  function platePicker() {
    const singleWords = textarea.replace(/[^a-zA-Z0-9]/g, " ").split(/\s+/);

    const formattedWords = singleWords.reduce((acc, word, index, arr) => {
      if (
        /[a-zA-Z]/.test(word[0]) &&
        (word.length === 7 || word.length === 8)
      ) {
        acc.push(word);
      } else if (
        /[a-zA-Z]/.test(word[0]) &&
        word.length < 7 &&
        arr[index + 1]
      ) {
        const combined2words = word + arr[index + 1];
        if (combined2words.length === 7 || combined2words.length === 8) {
          acc.push(combined2words);
        } else if (combined2words.length < 7 && arr[index + 2]) {
          const combined3words = combined2words + arr[index + 2];
          (combined3words.length === 7 || combined3words.length === 8) &&
            acc.push(combined3words);
        }
      }
      return acc;
    }, []);
    setPlates(formattedWords);
  }

  return (
    <Layout>
      <Frame>
        <TextWindow
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
        ></TextWindow>
        <ConfirmationButton onClick={platePicker}>OK</ConfirmationButton>
      </Frame>
    </Layout>
  );
}
export default Collector;
