import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import QnA from "../QnA.json";

const QuestionPage = () => {
  const [value, setValue] = useState({ A: 0, B: 0, C: 0, D: 0 });
  const [index, setIndex] = useState(0);
  const history = useHistory();
  const MAX_INDEX = 2;

  useEffect(() => {
    if (index === MAX_INDEX) {
      history.push("/result", { params: value });
    }
  }, [index]);

  const answerClicked = (valu) => {
    if (index < MAX_INDEX) {
      setValue((prevState) => ({
        ...prevState,
        [value]: prevState[value] + 1,
      }));
      setIndex(index + 1);
    }
  };

  return (
    <Background>
      <Container>
        <InnerContainer>
          <StatusBar />
          <Icon />
          {index < MAX_INDEX && (
            <>
              <Question>{QnA[index].question}</Question>
              <AnswerBox>
                {QnA[index].answers.map(({ answer, value }) => {
                  return (
                    <Answer onClick={() => answerClicked(value)}>
                      {answer}
                    </Answer>
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
