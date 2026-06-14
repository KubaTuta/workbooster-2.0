import { commonMap } from "../constants/dataMaps";

export function getCellType(key) {
  if (key === "damages") return "damages";
  else if (commonMap[key]?.isDate) return "date";
  else if (commonMap[key]?.isHyperlink) return "hyperlink";
  else return "default";
}