import { db } from "../db/db";

export async function saveRecordsToDB(storageStringName, resultArray) {
  await db.table(storageStringName).clear();
  await db.table(storageStringName).bulkPut(resultArray);
}