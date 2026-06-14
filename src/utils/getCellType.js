import { commonMap } from "../components/Update/dataMaps";

export function getCellType(key) {
  if (key === "damages") return "damages";
  else if (commonMap[key]?.isDate) return "date";
  else if (commonMap[key]?.isHyperlink) return "hyperlink";
  else return "default";
}