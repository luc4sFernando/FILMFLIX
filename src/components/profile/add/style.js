import styled from "styled-components"

export const ContainerAddProfile = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
export const Content = styled.section`
max-width: 45%;
width: 100%;
max-height: 948px;
heigth: 100%;
`
export const SectionTitle = styled.h1`
color: white;
font-size: 3rem;
font-weight: 500;
margin: 0px 0px 15px 0px;

`
export const SectionDesc = styled.p`

color: #666;
font-size: 1.3vw;
`
export const ContainerElements = styled.div`

display: flex;
width: 100%;
justify-content: flex-start;
align-items: center;
border-bottom: 1px solid #333;
border-top: 1px solid #333;
padding: 30px 0px;;

`
export const InputContainer = styled.div`
margin-left: 20px;


`
export const DescContainer = styled.div`

height: 100px;
width: 100%;
`
export const ImageProfile = styled.img`
width: 115px;
border-radius: 4px;

`
export const Input = styled.input`

background: #666666;
border: 0;
color: #fff;
height: 2.5em;
width: 25em;
padding-left: 10px;
&::-webkit-input-placeholder{
   font-size: 16px;
    color: white;
    
    }

`
export const ButtonsContent = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
padding: 20px 0px;
gap: 20px;
`
export const Button = styled.button`
background-color: ${props => props.color ? "white" : "transparent"};
color: ${props => props.color ? "black" : "white"};
padding: 10px 20px;
border: ${props => props.color ? "none" : "solid 1px gray"};
letter-spacing: 2px;
font-weight: bold;
font-size: .8rem;
`