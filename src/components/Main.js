import styled, { createGlobalStyle } from "styled-components";
import CSSreset from "styled-reset";
import { Link } from "react-router-dom";
import beerLogoSrc from "../image/beer-logo.png";
import { useEffect } from "react";

import KakaoShareButton from "./KakaoShareButton";

const Main = () => {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://developers.kakao.com/sdk/js/kakao.js";
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <>
      <GlobalStyles />
      <Container>
        <InnerContainer>
          <Title>#맥주 테스트</Title>
          <SubTitle>나와 닮은 맥주는?</SubTitle>
          <Logo src={beerLogoSrc} />
          <Link to="/start">
            <StartButton>시작하기</StartButton>
          </Link>
        </InnerContainer>
        {/* <KakaoShareButton /> */}
      </Container>
    </>
  );
};

//Styling Area
const GlobalStyles = createGlobalStyle`
  ${CSSreset};

  body {
    @import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
    font-family: "Noto Sans KR", sans-serif !important;
  }
`;

const Container = styled.div`
  margin: 0 auto;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 670px;

  /* @media (min-width: 320px) and (max-width: 480px) {
    width: 320px;
    height: 320px;
  } */
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 500;
`;
const SubTitle = styled.p`
  margin-top: 12px;
  font-weight: 350;
  font-size: 18px;
`;
const Logo = styled.img`
  margin-top: 24px 0;
  height: 280px;
`;
const StartButton = styled.button`
  margin-top: 24px;
  width: 200px;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  background-color: black;
  /* background-color: #99d4ff; */
  &:hover {
    background-color: #33a8ff;
  }
`;

export default Main;
