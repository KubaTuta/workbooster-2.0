import { damageMap, ewiMap, macadamMap } from "./dataMaps.js";
import { DB_TABLES } from "./dbTables";

export const filesConfig = [
  {
    label: "Ewidencja",
    map: ewiMap,
    table: DB_TABLES.EWI,
  },
  {
    label: "Ekspertyzy",
    map: macadamMap,
    table: DB_TABLES.MACADAM,
  },
  {
    label: "Szkody",
    map: damageMap,
    table: DB_TABLES.DAMAGE,
  },
];