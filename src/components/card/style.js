import styled from 'styled-components';

export const RowWrap = styled.div`
    color: white;
    margin-left: 20px;
    margin: 00px 0px;
    position: relative;
`;
export const H2 = styled.h2`
    margin-left: 50px;
    font-size: 0.9rem;

    @media (max-width: 575.98px) {
        margin-left: 15px;
        font-size: 0.6rem;
        padding-top: 13px;
    }
    @media (min-width: 576px) and (max-width: 991.98px){
        margin-left: 35px;
        font-size: 0.8rem;
        padding-top: 13px;
        padding-bottom: 5px;
    }
    @media(min-width: 992px){
        margin-left: 45px;
        font-size: 1.2rem;
        padding-top: 13px;
        padding-bottom: 9px;
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
    @media (max-width: 575.98px) {
        padding: 5px 15px;
        &:hover > * {
            transform: translateX(-25%);
        }
    }
    @media (min-width: 576px) and (max-width: 991.98px){
        padding: 5px 35px;
        &:hover > * {
            transform: translateX(-25%);
        }
    }
    @media (min-width: 992px){
        padding: 5px 45px;
        &:hover > * {
            transform: translateX(-25%);
        }
    }
`;

export const PostWrap = styled.div`
    position: relative;
    display: block;
    transition: transform 500ms;

    @media (max-width: 575.98px) {
        width: 131px;
        margin-right: 4px;
      
     &:hover ~ & {
            transform: translateX(25%);
          }
     &:focus, &:hover{
         transform: scale(1.3);
         z-index: 2;
     }}
   

    @media (min-width: 576px) and (max-width: 991.9px){
        width: 190px;
        margin-right: 4px;
        &:hover ~ & {
            transform: translateX(25%);
          }
     &:focus, &:hover{
         transform: scale(1.3);
         z-index: 2;
     }
    
    }
    @media (min-width: 992px){
        width: 350px;
        margin-right: 10px;
       
        &:hover ~ & {
            transform: translateX(25%);
          }
     &:focus, &:hover{
         transform: scale(1.3);
         z-index: 2;
     }
     
    }
`;

export const ImgPost = styled.img`
    cursor: pointer;
    border-radius: 3px;
    width: 200px;
    object-fit: cover;
    margin-right: 10px;

    @media (max-width: 575.98px) {
        min-width: 131px;
        width: 100%;
    }
    @media (min-width: 576px) and (max-width: 991.9px) {
        min-width: 170px;
        width: 100%;
     
    }
    @media(min-width: 992px){
        width: 350px;
      
    }
`;

export const CardOptions = styled.div`
display: flex;
align-items: center;
padding: 5px 10px;
margin-right: 10px;
position: absolute;
top: 0px;
width: 100%;
height: 100%;
opacity: 1;
z-index: 1;


@media(max-width: 575.98px){
    & > * {
        transform: translateY(110px);
    }
  &:hover {
    opacity: 1;
    z-index: 6;
    & > * {
        transition: transform, ease 500ms;
        transform: translateY(15px);
    }
  }}

   @media (min-width: 576px) and (max-width: 991.9px){ 

   & > * {
       transform: translateY(110px);
   }
    &:hover{
      opacity: 1;
      z-index: 6;
      & > * {
        transition: transform, ease 500ms;
        transform: translateY(20px);
    }
    }
    

    }
    @media(min-width: 992px){
        & > * {
            transform: translateY(150px);
        }
         &:hover{
           opacity: 1;
           z-index: 6;
           & > * {
             transition: transform, ease 500ms;
             transform: translateY(30px);
         }
         }
    }

}
`;
