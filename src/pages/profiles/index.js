import React, { useState, useEffect } from "react";
import { LoginBackground } from "../login/styled";
import NavBar from "../../components/navbar";
import ProfileCard from "../../components/profile";
import AddProfileForm from "../../components/profile/add";


import { collection, setDoc, addDoc } from "firebase/firestore";

import db from "../../services/firebase"

import { storage } from "../../services/firebase";
import { getDownloadURL, listAll, ref, list } from "@firebase/storage";

function ProfileManager() {
  const [addProfile, setAddProfile] = useState(true);

  const [imgs, setImgs] = useState([])



useEffect(() => {

 const handleGetDatas = async () => {
   const storageRef = ref(storage, "/profile-images");
   const listImages = await listAll(storageRef);
   const product = [];
   const {items} = listImages;
   const val = await Promise.all(items.map(item => getDownloadURL(item)))
  setImgs(val)
 }
   

 

 handleGetDatas();
},[])
  console.log(imgs)

  return (
    <>
  <NavBar />
     <LoginBackground>
      {addProfile ? <AddProfileForm value={imgs}/> : <ProfileCard />} 
    
     </LoginBackground>
 
     
    
    </>
  );
}

export default ProfileManager;
