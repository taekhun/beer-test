import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import CSSreset from "styled-reset";

import Loader from "./LoadingBar/Loader";
import KakaoShareButton from "./KakaoShareButton";
import indicaSrc from "../image/indica.png";
import logoSrc from "../image/beer-logo.png";

const Result = () => {
  const [isLoading, setLoading] = useState(true);
  let isValid = false;
  const history = useHistory();
  const location = useLocation();
  let result = "";

  try {
    result = location.state.params;
    isValid = true;
  } catch (e) {
    console.error(e);
  }

  useEffect(() => {
    //로딩 3초후 결과화면
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      {!isValid && history.push("/")}
      <GlobalStyles />
      <Helmet>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </Helmet>
      <Container>
        <InnerContainer>
          <Header>
            <Logo src={logoSrc} />
            {/* <Title>#수제맥주 테스트</Title> */}
          </Header>
          {isLoading ? (
            <LoadingPage>
              <Loader />
            </LoadingPage>
          ) : (
            <ResultPage>
              <BeerImg src={indicaSrc} />
              <BeerTitle>{result}</BeerTitle>
              <BeerSubtitle />
              <BeerDesc />
              <ShareBox>
                <KakaoShareButton />
              </ShareBox>
            </ResultPage>
          )}
        </InnerContainer>
      </Container>
    </>
  );
};

//Styled Component
//Outer
const GlobalStyles = createGlobalStyle`
    ${CSSreset};
    body {
      @import url('https://fonts.googleapis.com/earlyaccess/notosanskr.css');
      font-family: "Noto Sans KR", sans-serif !important;
    }
`;
const Container = styled.div``;
const InnerContainer = styled.div`
  max-width: 320px;
  margin: 0 auto;
`;

//Header
const Header = styled.div`
  display: flex;
  justify-content: left;
`;
const Logo = styled.img`
  width: 70px;
`;
const Title = styled.h1`
  font-size: 28px;
  margin-left: 12px;
`;

//Loading Page
const LoadingPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;
const LoadingImg = styled.img``;
const LoadingTitle = styled.h1``;

//Result Page
const ResultPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BeerImg = styled.img`
  margin-top: 24px;
  width: 240px;
`;
const BeerTitle = styled.h1`
  margin-top: 24px;
  font-size: 24px;
`;
const BeerSubtitle = styled.h2``;
const BeerDesc = styled.h3``;
const ShareBox = styled.div``;

export default Result;
