import React, {useState} from 'react'
import NavBar from '../../components/navbar'
import SignUp from '../../components/sign';
import {Button,  HeroCard, Input, LoginBackground, LoginContainer, Paragraph, SubTitle, Title, Wrap} from './styled'

function LoginScreen() {
    
    const [sign, SetSign] = useState(true);
    return (
        <>
     
        <NavBar />

        <LoginContainer>
            <LoginBackground>
            {sign ? (<SignUp  />) :  (<HeroCard>
                <Title>Unlimited movies, TV shows, and more.</Title>
                <SubTitle>Watch anywhere. Cancel anytime</SubTitle>
                <Paragraph>Ready to watch? Enter your email to create or restart your membership.</Paragraph>
                <Wrap>
                    <Input type="text" placeholder="Email adress" />
                    <Button>
                        Get Started 
                    </Button>
                </Wrap>
                </HeroCard>)}
                
                </LoginBackground>
        </LoginContainer>
     
        
        </> 
    )
}

export default LoginScreen
