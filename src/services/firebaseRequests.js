import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

import db from "./firebase";

class Firestore {
  constructor() {
    this.db = db;
    this.errors = [];
    this.user = "";
  }
  async getAllData(id) {
    try {
      const users = await getDocs(collection(db, "users"));
      users.forEach((user) => {
        if (user.data().uid === id) {
        this.user = user.id;
        const val = this.user;
        return val;
        }
      });
    } catch (error) {
      this.errors.push(error);
      
    }
    if (this.errors.length > 0) {
      return;
    }
  }
  async setData(data, id) {
    try {
      await this.getAllData(id);

      const useRef = doc(this.db, "users", this.user);

      await updateDoc(useRef, data);
    } catch (error) {
      this.errors.push(error.message);
      console.log(error.message);
    }

    return this.errors;
  }
}

export const DataBase = new Firestore();
