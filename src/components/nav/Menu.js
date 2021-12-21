import React, { useEffect, useState } from 'react';
import { NavigatorLink, Preferences } from './NavigatorLink';
import { Container, NavigatorList } from './stylemenu';

function Menu({ type }) {
  const [show, handleShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => {
      window.removeEventListener('scroll', transitionNavBar);
    };
  }, []);

  return (
    <Container color={show}>
      <NavigatorList>
        <NavigatorLink type={type} icon='/FILMFLIX.png' />
        <NavigatorLink><p style={{fontSize: "12px", fontWeight: "400"}}>Start</p></NavigatorLink>
        <NavigatorLink><p style={{fontSize: "12px", fontWeight: "400"}}>Series</p></NavigatorLink>
        <NavigatorLink><p style={{fontSize: "12px", fontWeight: "400"}}>Films</p></NavigatorLink>
      </NavigatorList>
      <Preferences type={type} />
    </Container>)}

export default Menu;
