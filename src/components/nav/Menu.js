import React, { useEffect, useState } from 'react'
import {NavigatorLink, Preferences} from './NavigatorLink'
import { Container,  NavigatorList } from './stylemenu'

function Menu({type}) {

    const [show, handleShow] = useState(false)
    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true)
        }
        else{
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar)
        return () => {
            window.removeEventListener('scroll', transitionNavBar)
        }
    }, [])

    return (
    <Container  color={show}>
    <NavigatorList>
    <NavigatorLink type={type} icon="https://devflix.johnywalves.com.br/img/logo.png"/>
    <NavigatorLink>
        Start
    </NavigatorLink>
    <NavigatorLink>
        Series
    </NavigatorLink>
    <NavigatorLink>
        Films
    </NavigatorLink>
    </NavigatorList>
<Preferences type={type}/>
</Container>
    )
}

export default Menu
