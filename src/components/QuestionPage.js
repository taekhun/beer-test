import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import CSSreset from "styled-reset";
import logoSrc from "../image/beer-logo.png";

import QnA from "../assets/QnA.json";
import LoadingPage from "./LoadingPage";

const QuestionPage = () => {
  const [score, setScore] = useState({
    //낮을수록 앞(E,S,T,F)
    //높을수록 뒤(I,N,F,P)
    E_I: 0,
    S_N: 0,
    T_F: 0,
    J_P: 0,
  });
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  // const MAX_INDEX = QnA.length;
  const MAX_INDEX = 2;

  //클릭시 score count && index++
  const answerClicked = (item) => {
    for (const prop in item) {
      setScore((prev) => ({
        ...prev,
        [prop]: prev[prop] + item[prop],
      }));
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    //Carousel 슬라이드 이동
    const carousel = document.querySelector("#carousel");
    carousel.style.transition = "all 0.5s ease-in-out";
    carousel.style.transform = `translateX(-${index}00%)`;

    //마지막 index => Loading 페이지
    if (index === MAX_INDEX) {
      setLoading(true);
    }
  }, [index]);

  return (
    <>
      <GlobalStyles />
      {loading && <LoadingPage score={score} />}

      {!loading && (
        <Container>
          <InnerContainer>
            <CarouselContainer id="carousel">
              {QnA.map(({ index }) => {
                return (
                  <CarouselBox>
                    <Navbar>
                      <QuestNumber>Q{index + 1}.</QuestNumber>
                      <StatusBar>
                        {index + 1}/{MAX_INDEX}
                      </StatusBar>
                    </Navbar>
                    {index < MAX_INDEX && (
                      <QABox>
                        <Question>
                          {/* {QnA[index].question.replace("\n", "\\r\\n")} */}
                          {QnA[index].question}
                        </Question>
                        <Icon src={logoSrc} />
                        <AnswerBox>
                          {QnA[index].answers.map(({ answer, score }) => {
                            return (
                              <AnswerButton
                                onClick={() => answerClicked(score)}
                              >
                                {answer}
                              </AnswerButton>
                            );
                          })}
                        </AnswerBox>
                        {/* <BackButton /> */}
                      </QABox>
                    )}
                  </CarouselBox>
                );
              })}
            </CarouselContainer>
          </InnerContainer>
        </Container>
      )}
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
  /* overflow: hidden; */
`;
const InnerContainer = styled.div`
  width: 300px;
  /* width: 90vw; */
  margin: 0 auto;
  overflow: hidden;
`;

//Carousl Container
const CarouselContainer = styled.div`
  display: flex;
`;
const CarouselBox = styled.div``;

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
  font-size: 2rem;
  font-weight: 700;
`;
const StatusBar = styled.div`
  color: #b7b7b7;
  font-size: 1.2rem;
`;

//Body
const QABox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Icon = styled.img`
  width: 150px;
  margin: 24px 0;
`;
const Question = styled.h1`
  margin: 12px 0;
  font-size: 1.2rem;
  font-weight: 600;
`;
const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const AnswerButton = styled.button`
  /* width: 90vw; */
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

const BackButton = styled.button`
  width: 30px;
`;
export default QuestionPage;
