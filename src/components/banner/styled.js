import styled from "styled-components";

export const Header = styled.header`
position: relative;
width: 100%;
height: 480px;
object-fit: contain;
color: white;
`
export const BannerContents = styled.div`
margin-left: 30px;
padding-top: 140px;
height: 190px;
`
export const BannerTitle = styled.h1`
font-size: 3rem;
font-weight: 800;
padding-bottom: 0.3rem;


`
export const ButtonsWrap = styled.div`
margin-top: 0.5rem;
display: flex;

`
export const BannerButton = styled.button`
display: ${props => props.flex ? 'flex' : 'block'};
justify-content: center;
align-items: center;
outline: none;
border: none;
font-weight: 700;
border-radius: 0.4vw;
padding-left: 2.4rem;
padding-right: 2.5rem;
padding-top: 0.8rem;
padding-bottom: 0.8rem;
background-color: rgba(51, 51, 51, 0.5);
color: white;
margin-right: 1rem;
&:hover{
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
}

`
export const BannerDescription = styled.h1`
width: 45rem;
font-size: 0.8rem;
line-height: 1.3rem;
padding-top: 1rem;
max-width: 360px;
height: 80px;

`
export const FadeBottom = styled.div`
height: 18.2rem;
background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111);
`