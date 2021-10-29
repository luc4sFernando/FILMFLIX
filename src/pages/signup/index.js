import React, {useState} from 'react'
import NavBar from '../../components/navbar'

import { auth } from '../../services/firebase';

import db from '../../services/firebase'

import { createUserWithEmailAndPassword} from 'firebase/auth';

import { emailSelector } from '../../features/selectors'
import { useSelector } from 'react-redux'
import { Body, Form, Content, Span,Span2,Span3, Paragraph, ValueEmail, Input, Button } from './styled'

function Signup() {
    const user = useSelector(emailSelector);

    console.log(user);

    const [pass, setPass] = useState('');

    const register = async () => {
        
        const userCredential = await createUserWithEmailAndPassword(auth, user, pass);
        console.log(userCredential)
    };
    return (
        <>
            <NavBar val={true}/>

            <Body>
                
                <Content>
                    <Form>
                        <Span>STEP <b>1</b> OF <b>3</b></Span>
                        <Paragraph>Welcome back!<br />
                            Joining Netflix is easy.</Paragraph>
                            <Span2>Enter your password and you'll be watching in no time.
                            </Span2>
                        <Span3>Email</Span3>
                        <ValueEmail><b>{user}</b></ValueEmail>
                        <Input placeholder="Enter your password" type="password" onChange={(e) => {
                            setPass(e.target.value)
                        }} value={pass}/>
                        <Button type="submit" onClick={(e) => {
                            e.preventDefault();
                            register();
                        }}>Next</Button>
                    </Form>
                </Content>
            </Body>
        </>
    )
}

export default Signup
