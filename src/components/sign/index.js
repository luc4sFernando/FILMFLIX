import React, {useState} from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import db from '../../services/firebase'
import { collection, addDoc } from "firebase/firestore";

import { Container, H1, Wrap, Form, Input, Button, Register, Paragraph } from './style'

function SignIn() {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

    const register = (e) => {
        e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          return userCredential
      }
      ).then((user) => {
          addDoc(collection(db, "users"), {
              email: user.user.email,
              uid: user.user.uid
          })
      
      }).catch(error => console.log(error))
      
    
    }
   
    const sigIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then(
            (userCredential) => console.log(userCredential)
        ).catch((error) => alert(error.message))
    }; 

    return (
<>
<Container>
    <Wrap>
        <H1>
            Sign In
        </H1>
        <Form>
        <Input onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" value={email}/>
        <Input  onChange={(e) => setPassword(e.target.value)}placeholder="Password" type="password" value
        ={password}/>
        <Button type="submit" onClick={sigIn}>Sign In</Button>
        </Form>
        <Register>
            <Paragraph bold={false}>New to Netflix?</Paragraph>
            <Paragraph bold={true} onClick={register}>Sign Up Now</Paragraph>
        </Register>
    </Wrap>
</Container>
</>
    )
}

export default SignIn;
