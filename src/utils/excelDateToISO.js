export function excelDateToISO(excelDate) {
  if (typeof excelDate === "string") {
    return excelDate;
  }

  return new Date((excelDate - 25569) * 86400 * 1000).toISOString();
}
