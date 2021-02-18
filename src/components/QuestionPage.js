import { useState } from "react";
import styled from "styled-components";

const QuestionPage = () => {
  return (
    <Background>
      <Container>
        <InnerContainer>
          <StatusBar />
          <Icon />
          <Question>오늘 누구랑 마셔요?</Question>
          <AnswerBox>
            <Answer>A</Answer>
            <Answer>B</Answer>
            <Answer>C</Answer>
            <Answer>D</Answer>
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
