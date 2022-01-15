import React from 'react';
import { useState, useEffect } from 'react';
import { NavContainer, NetFlixLogo, ExitLink } from './styled';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/selectors';
import { useHistory } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

function NavBar({ val }) {
    const history = useHistory();
    const user = useSelector(userSelector);

    const [show, handleShow] = useState(false);

    const auth = getAuth();

    const currentUser = auth.currentUser;
    console.log(currentUser);

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
        <>
            <NavContainer border={val} color={show}>
                <NetFlixLogo
                    user={user}
                    onClick={() => {
                        history.push('/');
                    }}
                    src="/FILMFLIX.png"
                />

                <ExitLink
                    to="/"
                    onClick={() => {
                        localStorage.clear();
                    }}
                >
                    Exit
                </ExitLink>
            </NavContainer>
        </>
    );
}

export default NavBar;
