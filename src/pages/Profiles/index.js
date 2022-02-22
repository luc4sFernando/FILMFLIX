import React, { useState, useEffect } from "react";
import { LoginBackground } from "../Login/styled";
import NavBar from "../../components/navbar";

import ProfileCard from "../../components/profile";
import AddProfileForm from "../../components/profile/add";

import { storage } from "../../services/firebase";
import { getDownloadURL, listAll, ref } from "@firebase/storage";

function ProfileManager() {
  const [addProfile, setAddProfile] = useState(true);

  const [imgs, setImgs] = useState([]);

  useEffect(() => {
    const handleGetDatas = async () => {
      const storageRef = ref(storage, "/profile-images");
      const listImages = await listAll(storageRef);

      const { items } = listImages;
      const val = await Promise.all(items.map((item) => getDownloadURL(item)));
      setImgs(val);
    };

    handleGetDatas();
  }, []);
  console.log(imgs)
  return (
    <>
      <NavBar url={"/browse"} />
      <LoginBackground>
        {addProfile ? <AddProfileForm value={imgs} /> : <ProfileCard />}
      </LoginBackground>
    </>
  );
}

export default ProfileManager;
