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

@media(max-width: 575.98px){
    max-width: 350px;
}

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

@media(max-width: 575.98px){
    font-size: 12px;
}
`
export const Span2 = styled.span`
font-size: 19px;
margin-bottom: 12px;
color: #333;
@media(max-width: 575.98px){
    font-size: 12px;
}
`
export const Span3 = styled.span`
font-size: 16px;
margin-bottom: 2px;
@media(max-width: 575.98px){
    font-size: 12px;
}
`
export const Paragraph = styled.p`
    font-weight: 700;
    font-size: 23px;
    margin-bottom: 12px;
    @media(max-width: 575.98px){
        font-size: 18px;
    }
`
export const ValueEmail = styled.p`
margin-bottom: 30px;
@media(max-width: 575.98px){
    margin-bottom: 15px;
}

`
export const Input = styled.input`
border-radius: 4px;
border: 0.4px solid black;
color: black;
height: 60px;
line-height: 50px;
padding: 16px 10px ;
width: 100%;
margin-bottom: 30px;
&::-webkit-input-placeholder{
font-size: 14px;
align-items: center;

}
@media(max-width: 575.98px){
    font-size: 13px;
    margin-bottom: 15px;
    height: 40px;
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

@media(max-width: 575.98px){
    font-size: 14px;
    padding: 14px 10px;
}
`

