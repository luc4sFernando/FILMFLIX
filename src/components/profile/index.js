import React from 'react'
import { collection, addDoc, getDocs } from '@firebase/firestore';
import {MdEdit} from "react-icons/md"
import {GrAddCircle} from "react-icons/gr"
import { AvatarProfile, AvatarWrap, ListProfiles, Name, ProfileLink, ProfileList, ProfilesContainer, ProfilesWrap, SectionTitle } from "../../components/profile/style";


import db from '../../services/firebase'

function ProfileCard() {





    
    return (
        <>
            <ProfilesContainer>
              <SectionTitle>Manager Profiles</SectionTitle>
              <ProfilesWrap>
                <ListProfiles>
                  <ProfileList>
                    <ProfileLink >
                      <AvatarWrap>
                        <AvatarProfile style={{opacity: "0.3"}}></AvatarProfile>
                        <MdEdit size="40px" color="white" style={{position: "relative", top: "-93px"}}/>
                        <Name>Lucas</Name>
                      </AvatarWrap>
                    </ProfileLink>
                  </ProfileList>
                  <ProfileList>
                    <ProfileLink >
                      <AvatarWrap>
                        <AvatarProfile style={{background: "white"}}></AvatarProfile>
                        <GrAddCircle size="50px" color="white" style={{position: "relative", top: "-97px"}}/>
                        <Name>Lucas</Name>
                      </AvatarWrap>
                    </ProfileLink>
                  </ProfileList>
                </ListProfiles>
              </ProfilesWrap>
          </ProfilesContainer>
        </>
    )
}

export default ProfileCard
