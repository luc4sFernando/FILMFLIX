import styled from "styled-components";

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
justify-content: flex-start;
align-items: left;
margin: 30px auto 15px;

`
export const InfoWrap = styled.div`
background-color: white;
margin-bottom: 40px;

`

export const TextContent = styled.div`
display: flex;
margin: 3px 0px;

`

export const Texts = styled.p`
font-size: 17px;
margin-left: 14px;`

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

`
export const ContainerWrap = styled.div`
width: 88%;
display: flex;
justify-content: flex-end;

`
export const SquareColum = styled.div`
width: 68.2%;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: flex-end;

`

export const SquaresWrap = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
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
border-collapse: collapse;

`
export const TableRow = styled.tr`


`
export const TableD = styled.td`
min-height: 60px;
padding: 15px 0px;
align-items: center;
border-bottom: ${props => !props.border ?  "1px solid #ccc" : "none"} ;
text-align: center;

`
export const FeatureCell = styled.td`
width: 40%;
padding: 15px;
min-height: 60px;
border-bottom: ${props => !props.border ?  "1px solid #ccc" : "none"} ;
`