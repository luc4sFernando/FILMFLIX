import React, { useState } from "react";
import { LoginBackground } from "../login/styled";
import NavBar from "../../components/navbar";
import ProfileCard from "../../components/profile";
import AddProfileForm from "../../components/profile/add";



function ProfileManager() {

  const [addProfile, setAddProfile] = useState(true);

  return (
    <>
      <NavBar />
      <LoginBackground>
        {addProfile ? <AddProfileForm /> : <ProfileCard />}
      
      </LoginBackground>
    </>
  );
}

export default ProfileManager;
