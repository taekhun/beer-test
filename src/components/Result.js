import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const Result = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const location = useLocation();
  const { E_I, S_N, T_F, J_P } = location.state.params;
  let beerResult;
  if (E_I >= 5) {
    beerResult = "IPA";
  } else {
    beerResult = "Cass";
  }

  //Styled Component
  //Outer
  const Container = styled.div``;
  const InnerContainer = styled.div``;

  //Loading Page
  const LoadingPage = styled.div``;

  //Result Page
  const ResultPage = styled.div``;
  const BeerImg = styled.div``;
  const BeerTitle = styled.h1``;
  const BeerSubtitle = styled.h2``;
  const BeerDesc = styled.h3``;
  const ShareBox = styled.div``;

  return (
    <>
      <Container>
        <InnerContainer>
          {isLoading ? (
            <LoadingPage>로딩중...</LoadingPage>
          ) : (
            <ResultPage>
              <BeerImg />
              <BeerTitle>{beerResult}</BeerTitle>
              <BeerSubtitle />
              <BeerDesc />
              <ShareBox />
            </ResultPage>
          )}
        </InnerContainer>
      </Container>
    </>
  );
};

export default Result;
