import styled from "styled-components";

export const Container = styled.div`
min-height: 550px;
min-width: 250px;
max-width: 450px;
padding: 60px 68px 40px;
background-color: rgba(0,0,0,.75);

`
export const Wrap = styled.div`
width: 100%;

`
export const Form = styled.form`

`
export const H1 = styled.h1`
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 28px;
`
export const Input = styled.input`
background: #333;
border-radius: 4px;
border: 0;
color: #fff;
height: 50px;
line-height: 50px;
padding: 16px 20px ;
width: 100%;
margin-bottom: 28px;
`
export const Button = styled.button`
width: 100%;
background: #e50914;
font-size: 16px;
font-weight: 700;
margin: 24px 0 12px;
padding: 16px;
border: none;
color: white;
border-radius: 4px;
cursor: pointer;
`
export const Register = styled.div`
display: flex;
justify-content: flex-start;
color: #737373;
font-size: 16px;

margin-top: 16px;
`
export const Paragraph = styled.p`
margin-right: 5px;
font-weight: ${props => props.bold ? "600" : "300"};
color: ${props => props.bold && "white"};
cursor: ${props => props.bold && "pointer"};
`