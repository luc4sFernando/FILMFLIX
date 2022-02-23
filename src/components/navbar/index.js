import React from 'react';
import { NavContainer, NetFlixLogo, ExitLink } from './styled';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/selectors';
import { useHistory } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

function NavBar({ val, url, link}) {
    const history = useHistory();
    const user = useSelector(userSelector);
    const auth = getAuth();
    const currentUser = auth.currentUser;
    console.log(currentUser);
    async function logout(){
        signOut(auth).then(val => console.log(val))
    }

console.log(url)

    return (
        <>
            <NavContainer border={val} >
                <NetFlixLogo
                    user={user}
                    onClick={() => {
                        history.push(url);
                    }}
                    src="/FILMFLIX.png"
                />
                {link && ( <ExitLink
                    to="/"
                    onClick={() => {
                        localStorage.clear();
                        logout();
                    }}
                >
                    Exit
                </ExitLink>)}
               
            </NavContainer>
        </>
    );
}

export default NavBar;
