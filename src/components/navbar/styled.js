import styled from "styled-components";
import {Link} from 'react-router-dom';
export const Nav = styled.div`
`
export const NavContainer = styled.div`
position: fixed;
top: 0;
padding: 20px;
width: 100%;
height: 90px;
display: flex;
justify-content: space-between;
background-color: ${props => props.color ? 'black' : 'transparent'};
z-index: 1;
transition-timing-function: ease-in ;
transition: all 0.5s;
border-bottom: ${props => props.border ? "1px solid #e6e6e6" : 'none'};


`

export const NetFlixLogo = styled.img`
cursor: pointer;
position: fixed;
top: 23.8px;
left: 51px;
width: ${props => !props.user?.plans ? '168px' : '80px'};
object-fit: contain;


`
export const ProfileLogo = styled.img`
cursor: pointer;
width: 30px;
position: fixed;
top: 15px;
right: 30px;
`
export const ButtonLogin = styled.button`
border: none;
cursor: pointer;
padding: 10px 20px;
position: fixed;
top: 25px;
right: 50px;
font-size: 1rem;
font-weight: 600;
border-radius: 3px;
background-color: #DB202C;
color: white;
`
export const ExitLink = styled(Link)`
position: absolute;
color: black;
right: 40px;
font-size: 2em;
z-index: 999;
cursor: pointer;
font-weight: 400;

`
