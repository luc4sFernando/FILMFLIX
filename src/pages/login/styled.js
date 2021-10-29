import styled from "styled-components";

export const LoginContainer = styled.div`
background: url("https://assets.nflxext.com/ffe/siteui/vlv3/a1a5d7dc-aedf-4570-b58d-693af16e1445/b613409d-346c-4581-897d-0544b2d24e7c/BR-pt-20211020-popsignuptwoweeks-perspective_alpha_website_large.jpg") center no-repeat;

background-size: cover;

`
export const LoginBackground = styled.div`
width: 100vw;
height: 100vh;
background: rgba(0,0,0, 0.4);
background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0.9) 100%
); 
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
color: white;
z-index: 1;
`
export const HeroCard = styled.div`
    position: relative;
    width: 100%;
    padding: 75px 0;
    max-width: 950px;
    margin: 0 auto;
    text-align: center;
    z-index: 1;
`
export const Title = styled.h1`
font-size: 3.125rem;
color: white;
max-width: 640px;
margin: 0 auto;
`
export const SubTitle = styled.h2`
font-size: 1.625rem;
color: white;
margin: 1rem auto;
`
export const Paragraph = styled.p`
padding: 0 10%;
max-width: none;
padding-bottom: 20px;
font-size: 1.2rem;

`
export const Wrap = styled.form`
display: flex;
justify-content: center;

`
export const Input = styled.input`
min-width: 450px;
padding: 10px 10px ;

&::-webkit-input-placeholder{
font-size: 16px;
align-items: center;
}
`
export const Button = styled.button`
    font-size: 1.425rem;
    min-height: 60px;
    margin: 0%;
    background-color: #E50914;
    border: none;
    color: white;
    padding: 0 20px;
    border-left: 1px solid black;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

`
