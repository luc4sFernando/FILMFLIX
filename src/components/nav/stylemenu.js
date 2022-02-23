import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    padding: 20px 64px;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    background-image: ${(props) =>
        props.color
            ? 'linear-gradient(360deg, transparent, rgba(37, 37, 37, 0.61), #111)'
            : 'black'};
    background-color: ${(props) => (props.color ? '#141414' : 'transparent')};
    z-index: 5;
    transition-timing-function: ease-in;
    transition: all 0.5s;
    border-bottom: ${(props) => (props.border ? '1px solid #e6e6e6' : 'none')};

    @media (max-width: 575.98px) {
        height: 40px;
        padding: 10px 20px;
        align-items: center;
    }
    @media (min-width: 575.98px) and (max-width: 991.98px) {
        height: 60px;
        padding: 15px 40px;
    }
`;
export const NavigatorList = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    width: 300px;
    @media (max-width: 575.98px) {
        align-items: center;
    }
`;

export const Logout = styled.p`
font-size: 0.8rem;
font-weight: bold;
margin-left: 10px;
margin-bottom: 5px;
cursor: pointer;
color: white;
@media (max-width: 575.98px) {
    font-size: 0.8rem;
    z-index: 3;

}
`