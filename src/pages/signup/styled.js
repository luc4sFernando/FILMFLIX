import styled from "styled-components";

export const Body = styled.div`
width: 100vw;
height: 100vh;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const Content = styled.div`
max-width: 450px;
width: 100%;



`
export const Form = styled.form`

display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: left;

`
export const Span = styled.span`
margin-bottom: 05px;
font-size: 13px;
`
export const Span2 = styled.span`
font-size: 19px;
margin-bottom: 12px;
color: #333;
`
export const Span3 = styled.span`
font-size: 16px;
margin-bottom: 2px;
`
export const Paragraph = styled.p`
    font-weight: 700;
    font-size: 23px;
    margin-bottom: 12px;
`
export const ValueEmail = styled.p`
margin-bottom: 30px;

`
export const Input = styled.input`
border-radius: 4px;
border: 0.4px solid black;
color: #fff;
height: 60px;
line-height: 50px;
padding: 16px 10px ;
width: 100%;
margin-bottom: 30px;
&::-webkit-input-placeholder{
font-size: 16px;
align-items: center;
}
`
export const Button = styled.button`
width: 100%;
background-color: #e50914;
color: white;
border: none;
padding: 18px 28px;
font-size: 17px;
font-weight: 800;
cursor: pointer;
box-shadow: 0 1px 1px rgb(0 0 0 / 25%);
`