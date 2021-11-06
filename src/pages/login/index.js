import React, {useState} from 'react'
import validator from 'validator';
import NavBar from '../../components/navbar'
import { useHistory } from "react-router-dom";
import {Button,  HeroCard, Input, LoginBackground, LoginContainer, Paragraph, SubTitle, Title, Wrap} from './styled'
import {MdArrowForwardIos} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import {passedEmail} from '../../features/counter/stockSlice'


function LoginScreen() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    function handleClick(){
        
        history.push("/signup")
    }
    return (
        <>
        <NavBar />

        <LoginContainer>
            <LoginBackground>
            <HeroCard>
                <Title>Unlimited movies, TV shows, and more.</Title>
                <SubTitle>Watch anywhere. Cancel anytime</SubTitle>
                <Paragraph>Ready to watch? Enter your email to create or restart your membership.</Paragraph>
                <Wrap>
                    <Input type="email" placeholder="Email adress" onChange={e => setEmail(e.target.value)} value={email}/>
                    <Button onClick={(e) => {
                        e.preventDefault();
                        if(validator.isEmail(email)){
                            dispatch(passedEmail(email));
                            handleClick();
                        }else{
                            alert('Digite um email válido')
                        }
                      
                       

                    }}>
                        Get Started <MdArrowForwardIos />
                    </Button>
                </Wrap>
                </HeroCard>
                
                </LoginBackground>
        </LoginContainer>
     
        
        </> 
    )
}

export default LoginScreen
