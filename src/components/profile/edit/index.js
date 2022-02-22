import React, { useEffect, useState } from 'react'
import useGetAndUpdateUser from '../../../hooks/useGetAndUpdateUser';
import { query, getDocs, collection, addDoc, where, updateDoc } from 'firebase/firestore';
import {
    Button,
    ButtonsContent,
    ContainerAddProfile,
    ContainerElements,
    Content,
    DescContainer,
    ImageProfile,
    Input,
    InputContainer,
    SectionDesc,
    SectionTitle,
  } from '../add/style';
import db from '../../../services/firebase';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function EditProfile({user, state: {name, setName}}) {
    const history = useHistory("/")
    const p1 = useGetAndUpdateUser();
    
    const [refProfile, setRefProfile] = useState("");
    console.log(p1)
    useEffect(() => 
    {
        setName(user.name)
    }, [user.name])
    
    useEffect(() => {
        ( () => {
            p1.forEach(async (doc) => {
                const q = query(collection(db, `users/${doc.id}/profiles`), where("name", "==", user.name))
                const result = await getDocs(q);
                result.forEach(doc => setRefProfile(doc.ref))

                return;
            })
        })()
    }, [p1])

    async function updateProfile(refProfile, name){
        if(refProfile){
            await updateDoc(refProfile, {
                name
            })
        }
       return
    }
  return (
      <>
    <DescContainer>
    <SectionTitle>Edit Profile</SectionTitle>
  </DescContainer>
  <ContainerElements>
    <ImageProfile src={user.photoURL} alt='helo' />
    <InputContainer>
      <Input
        type='text'
        placeholder='Name'
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
    </InputContainer>
  </ContainerElements>
  <ButtonsContent>
    <Button
      color={true}
      onClick={() => {
        updateProfile(refProfile, name);
        history.push("/");
      }}
    >
      Continue
    </Button>
    <Button onClick={() => {
        history.push("/");
    }}>Cancel</Button>
  </ButtonsContent>
  </>
  )
}

export default EditProfile