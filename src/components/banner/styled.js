import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    opacity: 0;
    transform: translateY(150px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 650px;
  object-fit: cover;
  color: white;
  margin-bottom: 30px;

`;
export const BannerContents = styled.div`
  margin-left: 40px;
  padding-top: 200px;
  height: 190px;
  animation: ${rotate} 1.3s;


`;
export const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
  margin-left: 1.2rem;

  
`;
export const ButtonsWrap = styled.div`
  margin-top: 1.5rem;
  display: flex;
`;
export const BannerButton = styled.button`
  margin-left: 0.4rem;
  display: ${(props) => (props.flex ? 'flex' : 'block')};
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
  background-color: ${(props) => (props.color ? "white" : "rgba(51, 51, 51, 0.5)")};
  color: ${(props) => (props.color ? "black" : "white")};
  margin-right: 0.4rem;
  cursor: pointer;
  &:hover {

    opacity: 0.6;
    transition: all 0.2s;
  }

  
`;
export const BannerDescription = styled.h1`
  width: 45rem;
  font-size: 0.8rem;
  line-height: 1.3rem;
  padding-top: 1rem;
  max-width: 360px;
  height: 80px;
  margin-left: 1.2rem;
`;
export const FadeBottom = styled.div`
  height: 500px;
  background: rgb(20, 20, 20);
  background: linear-gradient(0deg, rgba(20,20,20,1) 23%, rgba(26,26,26,0.639093137254902) 49%, rgba(38,38,38,0) 78%);
`;
export const FadeBanner = styled.div`
  height: 50px;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 3;

  background: rgb(25, 25, 25);
  background: linear-gradient(
    180deg,
    rgba(20, 20, 20, 0.8995973389355743) 0%,
    rgba(38, 38, 38, 0) 100%
  );
`;
