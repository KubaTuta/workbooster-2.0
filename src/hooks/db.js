import Dexie from "dexie";

export const db = new Dexie("CarsDataBase");

db.version(1).stores({
  Ewidencja: "++id, plate, vin",
  Ekspertyzy: "++id, plate",
  Szkody: "++id, plate",
});

export async function downloadData(dbName) {
  return await db[dbName].toArray();
}
