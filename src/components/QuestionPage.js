import { useState } from "react";
import styled from "styled-components";
import QnA from "../QnA.json";

const QuestionPage = () => {
  let qIndex = 0;

  return (
    <Background>
      <Container>
        <InnerContainer>
          <StatusBar />
          <Icon />
          <Question>{QnA[qIndex].question}</Question>
          <AnswerBox>
            {qIndex === 0 &&
              QnA[qIndex].answers.map((item) => {
                return <Answer>{item.answer}</Answer>;
              })}
          </AnswerBox>
        </InnerContainer>
      </Container>
    </Background>
  );
};

//Styling Area
const Background = styled.div``;
const Container = styled.div``;
const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StatusBar = styled.div`
  border-style: ridge;
  width: 108px;
  height: 8px;
`;
const Icon = styled.i``;
const Question = styled.div``;
const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Answer = styled.button`
  width: 158px;
`;
export default QuestionPage;
