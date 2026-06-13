export function pickOutOnlyPlates(textarea, setPlates) {
  const singleWords = textarea.replace(/[^a-zA-Z0-9]/g, " ").split(/\s+/);

  const formattedWords = singleWords.reduce((acc, word, index, arr) => {
    if (/[a-zA-Z]/.test(word[0]) && (word.length === 7 || word.length === 8)) {
      acc.push(word.toUpperCase());
    } else if (/[a-zA-Z]/.test(word[0]) && word.length < 7 && arr[index + 1]) {
      const combined2words = word + arr[index + 1];
      if (combined2words.length === 7 || combined2words.length === 8) {
        acc.push(combined2words.toUpperCase());
      } else if (combined2words.length < 7 && arr[index + 2]) {
        const combined3words = combined2words + arr[index + 2];
        (combined3words.length === 7 || combined3words.length === 8) &&
          acc.push(combined3words.toUpperCase());
      }
    }
    return acc;
  }, []);
  setPlates(formattedWords);
}
