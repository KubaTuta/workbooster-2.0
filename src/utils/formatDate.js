export function formatDate(value) {
  const formattedDate = new Date(value).toLocaleDateString("pl-PL");
  const displayedDate =
    formattedDate === "Invalid Date" ? value : formattedDate;
  return displayedDate;
}
