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
`;
export const PostContainer = styled.div`
position: relative;
  display: flex;
  scroll-behavior: smooth;
  overflow-y: hidden;
  overflow-y: scroll;
  padding: 20px 50px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PostWrap = styled.div`

`;

export const ImgPost = styled.img`
  cursor: pointer;
  border-radius: 3px;
  width: 210px;
  max-height: 150px;
  object-fit: contain;
  margin-right: 10px;
  transition: transform 0.3s;

  &:hover{
    transform: scaleY(1.0);
  }

`;
