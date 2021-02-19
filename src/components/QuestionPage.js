import { useState } from "react";
import styled from "styled-components";
import QnA from "../QnA.json";

const QuestionPage = () => {
  const [value, setValue] = useState({});
  const [index, setIndex] = useState(0);

  const clickHandler = (value) => {
    alert(value);
    setIndex(index + 1);
  };

  return (
    <Background>
      <Container>
        <InnerContainer>
          <StatusBar />
          <Icon />
          <Question>{QnA[index].question}</Question>
          <AnswerBox>
            {QnA[index].answers.map(({ answer, value }) => {
              return (
                <Answer onClick={() => clickHandler(value)}>{answer}</Answer>
              );
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
