import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Nav = styled.div``;
export const NavContainer = styled.div`
    position: fixed;
    top: 0;
    padding: 20px;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => (props.color ? 'black' : 'transparent')};
    z-index: 1;
    transition-timing-function: ease-in;
    transition: all 0.5s;
    border-bottom: ${(props) => (props.border ? '1px solid #e6e6e6' : 'none')};

    @media (max-width: 575.98px) {
        height: 50px;
        padding: 0px;
        align-items: center;
    }
`;

export const NetFlixLogo = styled.img`
cursor: pointer;
position: absolute;
top: 23.8px;
left: 61px;
width: 140px;

@media(max-width: 575.98px){
    width: 85px;
    left: 50px;
    top: 16px;
}

@media(min-width: 576px) and (max-width: 991.9px){
    width: 120px;
    left: 50px;
    top: 16px;
}
}



`;
export const ProfileLogo = styled.img`
    cursor: pointer;
    width: 30px;
    position: fixed;
    top: 15px;
    right: 30px;


`;

export const ExitLink = styled(Link)`
position: absolute;
    color: black;
    right: 60px;
    top: 16px;
    font-size: 2em;
    z-index: 999;
    cursor: pointer;
    font-weight: 400;

    @media(max-width: 576px){
        font-size: 1.5em;
        top: 16px;
        right: 50px;
    }
    @media(min-width: 576px) and (max-width: 991.9px){
        width: 120px;
        right: 50px;
        top: 16px;
    }
`;
