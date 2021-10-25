import styled from "styled-components";

export const RowWrap = styled.div`
color: white;
margin-left: 20px;
margin: 00px 0px;

`
export const H2 = styled.h2`
margin-left: 20px;
font-size: 0.9rem;
`
export const PostContainer = styled.div`
display: flex;
overflow-y: hidden;
overflow-y: scroll;
padding: 20px;

&::-webkit-scrollbar{
display: none;
}

`

export const PostWrap = styled.div`


`
export const ImgPost = styled.img`
cursor: pointer;
max-height: ${props => props.isLarge ? '250px' : '100px'};
object-fit: contain;
margin-right: 10px;
transition: transform 0.5s;
&:hover{
    transform: ${props => props.isLarge ? 'scale(1.09)' : 'scale(1.08)'}
    
}

`
