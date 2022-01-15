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

    @media (max-width: 575.98px) {
        object-fit: contain;
        background-repeat: no-repeat;
        height: 275px;
    }

    @media (min-width: 575.98px) and (max-width: 991.98px) {
        object-fit: contain;
        background-repeat: no-repeat;
        height: 340px;
    }
`;
export const BannerContents = styled.div`
    margin-left: 40px;
    padding-top: 200px;
    height: 190px;
    animation: ${rotate} 1.3s;

    @media (max-width: 575.98px) {
        padding-top: 50px;
        margin-left: 10px;
        height: auto;
    }

    @media (min-width: 576px) and (max-width: 991.98px) {
        padding-top: 70px;
        margin-left: 10px;
        height: auto;
    }
`;
export const BannerTitle = styled.h1`
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
    margin-left: 1.2rem;
    @media (max-width: 575.98px) {
        font-size: 1.2rem;
        margin-bottom: 0.1rem;
        padding-bottom: 0.1rem;
        margin-left: 10px;
    }

    @media (min-width: 576px) and (max-width: 991.98px) {
        font-size: 1.4rem;
        margin-bottom: 0.2rem;
        padding-bottom: 0.1rem;
        margin-left: 30px;
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

    @media (max-width: 575.98px) {
        font-size: 0.5rem;
        width: 10rem;
        line-height: 0.7rem;
        padding-top: 0.1rem;
        height: 40px;
        margin-left: 10px;
        margin-bottom: 15px;
        font-weight: 400;
    }

    @media (min-width: 576px) and (max-width: 991.98px) {
        font-size: 0.6rem;
        width: 10rem;
        line-height: 0.8rem;
        padding-top: 0.1rem;
        height: 40px;
        margin-left: 30px;
        margin-bottom: 2.3rem;
        font-weight: 400;
    }
`;

export const ButtonsWrap = styled.div`
    margin-top: 1.5rem;
    display: flex;
    @media (max-width: 575.98px) {
        margin-top: 0.4rem;
        width: 100%;
    }

    @media (min-width: 576px) and (max-width: 991.98px) {
        width: 100%;
        margin-left: 20px;
    }
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
    background-color: ${(props) =>
        props.color ? 'white' : 'rgba(51, 51, 51, 0.5)'};
    color: ${(props) => (props.color ? 'black' : 'white')};
    margin-right: 0.4rem;
    cursor: pointer;

    @media (max-width: 575.98px) {
        font-size: 0.5rem;
        padding-left: 0.4rem;
        padding-right: 0.5rem;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        margin-right: 0.4rem;
        align0items: start;
        justify-content: flex-start;
    }
    &:hover {
        opacity: 0.6;
        transition: all 0.2s;
    }

    @media (min-width: 576px) and (max-width: 991.98px) {
        font-size: 0.6rem;
        padding-left: 0.6rem;
        padding-right: 0.7rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        margin-right: 0.6rem;
        align0items: start;
        justify-content: flex-start;
    }
    &:hover {
        opacity: 0.6;
        transition: all 0.2s;
    }
`;

export const FadeBottom = styled.div`
    height: 600px;
    background: rgb(20, 20, 20);
    background: linear-gradient(
        0deg,
        rgba(20, 20, 20, 1) 23%,
        rgba(26, 26, 26, 0.639093137254902) 49%,
        rgba(38, 38, 38, 0) 78%
    );
    @media (max-width: 575.98px) {
        height: 500px;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(10,10,10,1) 75%, rgba(22,22,22,0) 100%);
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
