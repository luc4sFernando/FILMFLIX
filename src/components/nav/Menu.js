import React, { useEffect, useState } from 'react'
import {NavigatorLink, Preferences} from './NavigatorLink'
import { Container,  NavigatorList } from './stylemenu'

function Menu() {

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
    <NavigatorLink icon="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"/>
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
<Preferences/>
</Container>
    )
}

export default Menu
