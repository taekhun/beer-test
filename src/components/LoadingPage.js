import React from "react";
import Loader from "./Loading/Loader";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const LoadingPage = (props) => {
  const history = useHistory();
  const score = props.score;
  let result = "";
  //점수 집계
  score.E_I < 2 ? (result += "E") : (result += "I");
  score.S_N < 2 ? (result += "S") : (result += "N");
  score.T_F < 2 ? (result += "T") : (result += "F");
  score.J_P < 2 ? (result += "J") : (result += "P");

  useEffect(() => {
    setTimeout(() => {
      history.push(`/${result}`, { result });
    }, 5000);
  }, []);

  return (
    <Container>
      <InnerContainer>
        <Title>Loading...</Title>
        <Loader />
      </InnerContainer>
    </Container>
  );
};

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
`;

const Title = styled.h1`
  font-size: 32px;
`;

export default LoadingPage;
