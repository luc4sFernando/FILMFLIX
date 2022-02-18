import { collection, addDoc } from "firebase/firestore";
import db from "../services/firebase";

export const saveImgsDatabase = async (databasephotos) => {
  await addDoc(collection(db, "imgsUrl"), { urls: databasephotos });
};
