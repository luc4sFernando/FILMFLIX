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
    const auth = getAuth();
    const currentUser = auth.currentUser;
    console.log(currentUser);




    return (
        <>
            <NavContainer border={val} >
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
