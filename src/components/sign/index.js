import React, { useState } from 'react';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { useHistory } from 'react-router';

import { auth } from '../../services/firebase';

import {
  Container,
  H1,
  Wrap,
  Form,
  Input,
  Button,
  Register,
  Paragraph,
} from './style';
import NavBar from '../navbar';
import { LoginBackground, LoginContainer } from '../../pages/Login/styled';

export function Loggin() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sigIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        if(user){
          history.push("/browse")
        }
      })
      .catch((error) => alert(error.message));
      
  };

  return (
    <>
      <NavBar />
      <LoginContainer>
        <LoginBackground>
          <Container>
            <Wrap>
              <H1>Sign In</H1>
              <Form>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email'
                  type='email'
                  value={email}
                />
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password'
                  type='password'
                  value={password}
                />
                <Button type='submit' onClick={sigIn}>
                  Sign In
                </Button>
              </Form>
              <Register>
                <Paragraph bold={false}>New to Netflix?</Paragraph>
                <Paragraph
                  bold={true}
                  onClick={() => {
                    history.push('/signup');
                  }}
                >
                  Sign Up Now
                </Paragraph>
              </Register>
            </Wrap>
          </Container>
        </LoginBackground>
      </LoginContainer>
    </>
  );
}
