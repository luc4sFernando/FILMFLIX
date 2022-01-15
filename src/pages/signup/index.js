import React, { useState, useEffect } from 'react';

import { auth } from '../../services/firebase';
import db from '../../services/firebase';
import { collection, addDoc } from 'firebase/firestore';

import { createUserWithEmailAndPassword } from 'firebase/auth';

import { useSelector } from 'react-redux';
import { emailSelector } from '../../features/selectors';

import { useHistory } from 'react-router';

import {
  Body,
  Form,
  Content,
  Span,
  Span2,
  Span3,
  Paragraph,
  ValueEmail,
  Input,
  Button,
} from './styled';
import Menu from '../../components/nav/Menu';
import NavBar from '../../components/navbar';
import "./style.css"
function Signup() {
  const user = useSelector(emailSelector);
  const history = useHistory();
  const [pass, setPass] = useState('');

  const register = async () => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      user,
      pass
    );
    const docRef = await addDoc(collection(db, 'users'), {
      uid: userCredential.user.uid,
      email: userCredential.user.email,
      photoURL: userCredential.user.photoURL,
      plans: null,
    });
    console.log(docRef);
    handleRoute();
  };

  function handleRoute() {
    history.push('/signup/planform');
  }
  useEffect(() => {
    !user && history.push("/") 
  }, [])
  return (
   <div className="container-animation">
    <NavBar />

    <Body>
      <Content className="content-transition">
        <Form>
          <Span>
            STEP <b>1</b> OF <b>3</b>
          </Span>
          <Paragraph>
            Welcome back!
            <br />
            Joining Netflix is easy.
          </Paragraph>
          <Span2>
            Enter your password and you'll be watching in no time.
          </Span2>
          <Span3>Email</Span3>
          <ValueEmail>
            <b>{user}</b>
          </ValueEmail>
          <Input
            placeholder='Enter your password'
            type='password'
            onChange={(e) => {
              setPass(e.target.value);
            }}
            value={pass}
          />
          <Button
            type='submit'
            onClick={(e) => {
              e.preventDefault();
              register();
            }}
          >
            Next
          </Button>
        </Form>
      </Content>
    </Body>
  </div> 
    
  );
}

export default Signup;
