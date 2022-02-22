import React, { useEffect, useState, useCallback } from 'react';

import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import db from '../../../services/firebase';
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
} from './style';
import { idSelector } from '../../../features/selectors/index';
import { saveImgsDatabase } from '../../../services/fireStoreUrl';
import { useDispatch } from 'react-redux';
import { setBasicUrl } from '../../../features/reducers/stockSlice';
import Loading from '../../loading';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import EditProfile from '../edit';

function AddProfileForm({ value }) {

  const [loadScreen, setLoadScreen] = useState(false);
  const user = useSelector(idSelector);
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();

  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (value.length > 0) {
      setLoadScreen(true);
      dispatch(setBasicUrl(value[0]));
    }
  }, [value]);

  const getAndSetUserFromFirestore = useCallback(async () => {
    saveImgsDatabase(value);
    const q = query(collection(db, 'users'), where('uid', '==', user));
    const querySnap = await getDocs(q);

    querySnap.forEach(async (doc) => {
      await addDoc(collection(db, `users/${doc.id}/profiles`), {
        photoURL: value[0],
        name: userName,
      });
    });
    history.push('/');
  });
 
  return (
    <>
      <ContainerAddProfile>
        {console.log(loadScreen)}
        {loadScreen ? (
          <Content>
            {location.state ? (  <EditProfile user={location.state} state={{name: userName, setName: setUserName, func: getAndSetUserFromFirestore, image: value[0]}}/>): (<>
              <DescContainer>
              <SectionTitle>Add profile</SectionTitle>

              <SectionDesc>Add a Netflix profile for someone else</SectionDesc>
            </DescContainer>
            <ContainerElements>
              <ImageProfile src={value[0]} alt='helo' />
              <InputContainer>
                <Input
                  type='text'
                  placeholder='Name'
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  value={userName}
                />
              </InputContainer>
            </ContainerElements>
            <ButtonsContent>
              <Button
                color={true}
                onClick={() => {
                  getAndSetUserFromFirestore();
                }}
              >
                Continue
              </Button>
              <Button onClick={() => {
        history.push("/");
    }}>Cancel</Button>
            </ButtonsContent>
            </>)}
          
        
          </Content>
        ) : (
         <Loading />
        )}
      </ContainerAddProfile>
    </>
  );
}

export default AddProfileForm;
