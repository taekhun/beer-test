import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import CSSreset from "styled-reset";
import logoSrc from "../image/beer-logo.png";

import QnA from "../QnA.json";

const QuestionPage = () => {
  const [score, setScore] = useState({
    //낮을수록 전자(E,S,T,F)
    //높을수록 후자(I,N,F,P)
    E_I: 0,
    S_N: 0,
    T_F: 0,
    J_P: 0,
  });
  const [index, setIndex] = useState(0);
  const history = useHistory();
  const MAX_INDEX = QnA.length;
  let result = "";

  useEffect(() => {
    if (index === MAX_INDEX) {
      score.E_I < 2 ? (result += "E") : (result += "I");
      score.S_N < 2 ? (result += "S") : (result += "N");
      score.T_F < 2 ? (result += "T") : (result += "F");
      score.J_P < 2 ? (result += "J") : (result += "P");
      history.push("/result", { params: result });
    }
  }, [index]);

  const answerClicked = (item) => {
    for (const prop in item) {
      setScore((prev) => ({
        ...prev,
        [prop]: prev[prop] + item[prop],
      }));
      setIndex(index + 1);
    }
  };

  return (
    <Background>
      <GlobalStyles />
      <Container>
        <InnerContainer>
          <Navbar>
            <QuestNumber>Q{index + 1}.</QuestNumber>
            <StatusBar>
              {index + 1}/{MAX_INDEX}
            </StatusBar>
          </Navbar>
          {index < MAX_INDEX && (
            <>
              <Question>{QnA[index].question}</Question>
              <Icon src={logoSrc} />
              <AnswerBox>
                {QnA[index].answers.map(({ answer, score }) => {
                  return (
                    <AnswerButton onClick={() => answerClicked(score)}>
                      {answer}
                    </AnswerButton>
                  );
                })}
              </AnswerBox>
            </>
          )}
        </InnerContainer>
      </Container>
    </Background>
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
const Background = styled.div``;
const Container = styled.div`
  margin: 0 auto;
`;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  margin: 0 auto;
`;

//Navbar
const Navbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 48px 0 24px;
`;
const QuestNumber = styled.div`
  color: #33a8ff;
  font-size: 30px;
  font-weight: 700;
`;
const StatusBar = styled.div`
  color: #b7b7b7;
  font-size: 14px;
`;

//Body
const Icon = styled.img`
  width: 150px;
  margin: 24px 0;
`;
const Question = styled.h1`
  margin: 12px 0;
  font-size: 18px;
  font-weight: 600;
`;
const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const AnswerButton = styled.button`
  width: 300px;
  margin-top: 10px;
  height: 88px;
  outline: none;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  background-color: black;
  &:hover {
    background-color: #33a8ff;
  }
`;
export default QuestionPage;
