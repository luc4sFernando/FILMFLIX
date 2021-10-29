import styled from "styled-components";

export const Nav = styled.div`
`
export const NavContainer = styled.div`
position: fixed;
top: 0;
padding: 20px;
width: 100%;
height: 60px;
display: flex;
justify-content: space-between;
background-color: ${props => props.color ? 'black' : 'transparent'};
z-index: 1;
transition-timing-function:ease-in ;
transition: all 0.5s;

`

export const NetFlixLogo = styled.img`
cursor: pointer;
position: fixed;
top: 20px;
left: 30px;
width: ${props => !props.user ? '144px' : '80px'};
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
top: 20px;
right: 30px;
font-size: 1rem;
font-weight: 600;
border-radius: 3px;
background-color: #DB202C;
color: white;
`