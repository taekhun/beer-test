import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import styled, { createGlobalStyle } from "styled-components";
import CSSreset from "styled-reset";

import KakaoShareButton from "./KakaoShareButton";
import indicaSrc from "../image/indica.png";
import logoSrc from "../image/beer-logo.png";

const Result = () => {
  const history = useHistory();
  const location = useLocation();
  let result = location.state.result;

  return (
    <>
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
          <ResultPage>
            <BeerImg src={indicaSrc} />
            <BeerTitle>{result}</BeerTitle>
            <BeerSubtitle />
            <BeerDesc />
            <ShareBox>
              <KakaoShareButton beerInfo={result} />
            </ShareBox>
          </ResultPage>
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
