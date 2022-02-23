import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const ProfilesContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const SectionTitle = styled.h1`
    color: white;
    font-size: 2rem;
    font-weight: 500;
    margin: 0px 0px 15px 0px;

    @media(max-width: 575.98px){
        font-size: 1.6rem;
        font-weight: 300; 
    }
    @media(min-width: 576px) and (max-width: 991.98px) {
        font-size: 1.6rem;
        font-weight: 300; 
    }
`;
export const ProfilesWrap = styled.div`
    width: 100%;
   display: flex;

    @media(max-width: 575.98px){
     
    }
`;
export const ListProfiles = styled.ul`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    height: 200px;
    list-style: none;
    
   
`;
export const ProfileList = styled.li`

    height: 100px;
    width: 100px;
    @media(max-width: 575.98px){
   
        margin-bottom: 20px;
        
      }
      @media(min-width: 576px) and (max-width: 991.98px) {
        margin-bottom: 20px; 
    }
    @media(min-width: 992px){
        width: 144px;
       
        margin-bottom: 20px; 
    }
   
`;
export const ProfileLink = styled(Link)`
    width: 200px;
    height: 200px;
    cursor: pointer;
`;
export const AvatarWrap = styled.div`
        position: relative;
      height: 144px;
      display: flex;
      justify-content: center;
      align-items: center;

      @media(max-width: 575.98px){
          padding-top: 0px;
          max-height: 90px;
          margin-bottom: 10px;
      }
      @media(min-width: 576px) and (max-width: 991.98px) {
        max-height: 100px;
    }
`;
export const AvatarProfile = styled.div`
  
    background-image: url(${props => props.val});
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
   
    @media(max-width: 575.98px){
        width: 84px;
        height: 84px;
        &:hover {
            outline: 3px solid white;
        }
      }
      @media(min-width: 576px) and (max-width: 991.98px) {
        width: 84px;
        height: 84px;
        &:hover  {
            outline: 3px solid white;
        }
    }
    @media(min-width: 992px){
        width: 114px;
        height: 114px;

        &:hover {
            outline: 3px solid white;
        }
    }
`;
export const Name = styled.p`
    color: white;

    font-weigth: 300;
    text-align: center;

    @media(max-width: 575.98px){
        font-size: 11px;
        margin-bottom: 15px;
    }
    @media(min-width: 575.98px) and (max-width: 991.98px) {
        font-size: 11px;
        margin-bottom: 15px;
    }
    @media(min-width: 992px){
        font-size: 15px;
        margin-bottom: 15px;
    }
`;
