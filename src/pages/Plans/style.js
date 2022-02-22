import styled, { keyframes } from 'styled-components';

const transition = keyframes`
from{
    transform: translateX(200px);
    opacity: 0;
}
to{
    transform: translateX(0);
    opacity: 1;
}`
export const Body = styled.div`
width: 100vw;
height: 100vh;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
overflow: hidden;
`
export const Content = styled.div`

max-width: 878px;
height: 750px;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
margin: 30px auto 15px;
animation: ${transition} 0.5s ease-in;

@media(max-width: 575.98px){
    margin 50px 10px 0px;
    width: 400px;
}
@media(min-width: 576px) and (max-width: 991.9px){
    margin 50px 10px 0px;
    width: 450px;
}


`
export const InfoWrap = styled.div`
background-color: white;
margin-bottom: 40px;

@media(max-width: 575.98px){
    margin: 0px auto 20px;
}
@media(min-width: 576px) and (max-width: 991.9px){
    margin: 0px auto ;
}

`

export const TextContent = styled.div`
display: flex;
margin: 3px 0px;

@media(max-width: 575.98px){

}

`

export const Texts = styled.p`
font-size: 17px;
margin-left: 14px;

@media(max-width: 575.98px){
    font-size: 16px;
}
@media(min-width: 576px) and (max-width: 991.9px){
    font-size: 18px;
}
`

export const Text1 = styled.h1`
display: inline-block;
font-weight: 700;
font-size: 23px;
margin: 0 0 05px 0;
color: #333;

`

export const Span = styled.span`
margin-bottom: 05px;
font-size: 13px;
display: block;
`

// here init the squares
export const Input = styled.input`
width: 100%;
height: 100%;
appearance: none;
z-index: 999;
`

export const SquaresContainer = styled.div`
width: 100%;
height: 120px;
display: flex;
justify-content: flex-end;
align-items: center;
@media(max-width: 575.98px){
    width: 100%;
    justify-content: center;
}
@media(min-width: 576px) and (max-width: 991.9px){
    width: 100%;
    justify-content: center;
}


`
export const ContainerWrap = styled.div`
width: 88%;
display: flex;
justify-content: flex-end;
@media(max-width: 575.98px){
    width: 100%;
    justify-content: center;
}
@media(min-width: 576px) and (max-width: 991.9px){
    width: 100%;
    justify-content: center;
}
`
export const SquareColum = styled.div`
width: 68.2%;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: flex-end;
@media(max-width: 575.98px){
    width: 100%;
    justify-content: center;
}
@media(min-width: 576px) and (max-width: 991.9px){
    width: 100%;
    justify-content: center;
}

`

export const SquaresWrap = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
padding: 0px;
`
export const Square = styled.div`
width: 120px;
height: 120px;
background-color: red;
display: flex;
align-items: center;
justify-content: center;
opacity: .6;
border-radius: 4px;
cursor: pointer;

@media(max-width: 575.98px){
    height: 65px;
    border-radius: 2px;
    width: 130px;
}
@media(min-width: 576px) and (max-width: 991.9px){
    height: 65px;
    border-radius: 2px;
    width: 130px;
}
`

export const SquareSelectorWrap = styled.div`
width: 100%;
display: flex;
justify-content:   space-around;
margin-bottom: 20px;

`
export const SquareSelector = styled.div`
width: 120px;
background-color: transparent;
display: flex;
align-items: center;
justify-content: center;

`
export const Selector = styled.div`

width: 0;
height: 0;
border-left: solid 12px transparent;
border-right: solid 12px transparent;
border-top: solid 12px red;

z-index: 1;


`
export const SquareDescWrap = styled.div`
position: relative;
top: -50px;
width: 100%;
display: flex;
justify-content: space-around;
margin-bottom: 20px;
margin-top: -50px;
z-index: 1;
color: white;
font-weight: bold;

@media(max-width: 575.98px){
    top: -22px;
    font-size: 14px;

}
@media(min-width: 576px) and (max-width: 991.9px){
    top: -22px;
    font-size: 14px;
}
`
// export const P = styled.p`
// position: relative;

// right: 35px;
// font-weight: 800;
// color: white;
// cursor: pointer;

// `
// export const P1 = styled.p`
// position: relative;

// right: 35px;
// font-weight: 800;
// color: white;
// cursor: pointer;
// `
// export const P2 = styled.p`
// position: relative;
// right: 25px;
// font-weight: 800;
// color: white;
// cursor: pointer;
// `
//table

export const Table = styled.table`
width: 100%;
padding: 0px 10px;
border-collapse: collapse;


`
export const TableRow = styled.tr`


@media(max-width: 575.98px){
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: 12px;
    font-weight: 300;
    }
    
    @media(min-width: 576px) and (max-width: 991.9px){
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        font-size: 12px;
        font-weight: 300;
        
    }
    
`
export const TableD = styled.td`
min-height: 60px;
padding: 16px 0px;
align-items: center;
border-bottom: ${props => !props.border ?  "1px solid #ccc" : "none"} ;
text-align: center;

@media(max-width: 575.98px){
min-height: 25px;
padding: 5px;
min-width: calc(100% / 3);
font-size: 15px;
padding: 10px 0px;
  
}
@media(min-width: 576px) and (max-width: 991.9px){
    min-height: 25px;
    padding: 5px;
    min-width: calc(100% / 3);
    font-size: 15px;
    padding: 10px 0px;

}


`
export const FeatureCell = styled.td`
width: 40%;
padding: 15px;
min-height: 60px;
border-bottom: ${props => !props.border ?  "1px solid #ccc" : "none"} ;
@media(max-width: 575.98px){
    width: ${props => props.media === "mobile" ? "100%" : "40%"} ;
    padding: 0;
    padding-top: 5px;
    min-height: 25px;
    border-bottom: none;
    
    }
    @media(min-width: 576px) and (max-width: 991.9px){
        width: ${props => props.media === "mobile" ? "100%" : "40%"} ;
        padding: 0;
        padding-top: 5px;
        min-height: 25px;
        border-bottom: none;
    }
`
export const InfoTexts = styled.p`
font-size: 13px;
margin-left: 14px;
color: #737373;
margin-bottom: 10px;
width: 90%;

`
export const SubmitContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;

`
export const SubmitButton = styled.button`
padding: 12px;
background-color: #e50914;
min-height: 48px;
font-weight: 400;
font-size: 17px;
color: white;
border: none;
width: 45%;
border-radius: 2px;
box-shadow: 0 1px 1px rgba(0,0,0,.25);
cursor: pointer;
`