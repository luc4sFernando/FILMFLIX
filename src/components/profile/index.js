import React, { useEffect, useState } from 'react';
import { MdEdit } from 'react-icons/md';
import { GrAddCircle } from 'react-icons/gr';
import {
    AvatarProfile,
    AvatarWrap,
    ListProfiles,
    Name,
    ProfileLink,
    ProfileList,
    ProfilesContainer,
    ProfilesWrap,
    SectionTitle,
} from '../../components/profile/style';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import NavBar from '../navbar';

function ProfileCard() {
    const history = useHistory()
    const [profiles, setProfiles] = useState([]);
    const datas = useSelector(state => state.profiles.bank);
  
  
    console.log(datas)
    return (
        <>
        <NavBar url="/browse"/>
            <ProfilesContainer>
                <SectionTitle>Manager Profiles</SectionTitle>
                <ProfilesWrap>
                    <ListProfiles>
                        {datas && datas.map(val => {
                            return(
                                <>
                                 <ProfileList onClick={(e) => history.push({
                                     pathname: "/profiles/manager",
                                     state: val
                                 })}>
                            <ProfileLink>
                                <AvatarWrap>
                                    <AvatarProfile style={{ opacity: '0.3' }} val={val.photoURL} />
                                    <MdEdit
                                        size="25px"
                                        color="white"
                                        style={{
                                            position: 'absolute',
                                            top: "auto"
                                          
                                        }}
                                    />
                                </AvatarWrap>
                                    <Name>{val.name}</Name>
                            </ProfileLink>
                        </ProfileList>
                                </>
                            )
                        })}
                       
                        <ProfileList>
                            <ProfileLink>
                                <AvatarWrap>
                                    <AvatarProfile
                                        style={{ background: 'gray' }}
                                    />
                                    <GrAddCircle
                                        size="50px"
                                        color="white"
                                        style={{
                                            position: 'absolute',
                                            
                                          
                                        }}
                                        onClick={() => history.push("/profiles/manager")}
                                    />
                                </AvatarWrap>
                                    <Name>New Profile</Name>
                            </ProfileLink>
                        </ProfileList>
                    </ListProfiles>
                </ProfilesWrap>
            </ProfilesContainer>
        </>
    );
}

export default ProfileCard;
