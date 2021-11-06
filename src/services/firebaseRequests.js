import {  collection, doc, getDocs, updateDoc } from "firebase/firestore";

import db from "./firebase";




class Firestore {
    constructor(){
        this.db = db;
        this.errors = [];
        this.user = "";
   
    }
    async getAllData(id){

        try{
            const users = await getDocs(collection(db, "users"));
            users.forEach((user) => { 
                if(user.data().uid === id){
    
               
                    return this.user = user.id;
                }
               
            })
        }catch(error){
            this.errors.push(error);
            console.log(error.message);
        }
        if(this.errors.length > 0){
            return;
        }
       
    }
    async setData(data, id){
        try{
            await this.getAllData(id)

            const useRef = doc(this.db, "users", this.user); 
        
            console.log("aqui", useRef);
            
            await updateDoc(useRef, data)
        
        }catch(error){
            this.errors.push(error.message)
            console.log(error.message)
        }
   
    return this.errors
    }

}

export const DataBase = new Firestore();

