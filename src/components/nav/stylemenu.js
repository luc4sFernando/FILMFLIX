import styled from "styled-components";

export const Container = styled.div`
position: fixed;
top: 0;
padding: 20px 35px;
width: 100%;
height: 70px;
display: flex;
justify-content: space-between;
background-color: ${props => props.color ? '#141414' : 'transparent'};
z-index: 1;
transition-timing-function: ease-in ;
transition: all 0.5s;
border-bottom: ${props => props.border ? "1px solid #e6e6e6" : 'none'};

`
export const NavigatorList = styled.ul`
width: 30vw;
list-style: none;
display: flex;
align-items: center;
justify-content: space-between;
`
