import styled from "styled-components";

export const RowWrap = styled.div`
  color: white;
  margin-left: 20px;
  margin: 00px 0px;
  position: relative;
`;
export const H2 = styled.h2`
  margin-left: 50px;
  font-size: 0.9rem;

  @media(max-width: 575.98px){
    margin-left: 15px;
    font-size: 0.6rem;
    padding-top: 13px;
  }
`;
export const PostContainer = styled.div`
  position: relative;
  display: flex;
  scroll-behavior: smooth;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px 50px;
  &::-webkit-scrollbar {
    display: none;
    transition: all ease 1s;
  }
  @media(max-width: 575.98px){
    padding:  5px 15px;

  }
`;

export const PostWrap = styled.div`
height: 120px;
transition: transform 0.3s;
@media(max-width: 575.98px){
  height: 80px;
}

`;

export const ImgPost = styled.img`
  position: relative;
  cursor: pointer;
  border-radius: 3px;
  width: 200px;
  max-height: 150px;
  object-fit: contain;
  margin-right: 10px;
  @media(max-width: 575.98px){
    width: 140px;
    margin-right: 2px;
  }

`;

export const CardOptions = styled.div`
display: flex;
align-items: end;
padding: 5px 10px;
margin-right: 10px;
position: absolute;
top: 0px;
width: 200px;
height: 100%;
opacity: 0;
z-index: 1;
&: hover {
  transform: translateY(-15px);
  opacity: 1;
  transition: transform, ease 1s;
}
@media(max-width: 575.98px){
  &:hover {
    transform: translateY(-05px);
    opacity: 1;
    transition: transform, ease 1s;
    z-index: 3;
  }
}
`