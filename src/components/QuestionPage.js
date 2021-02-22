import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import QnA from "../QnA.json";

const QuestionPage = () => {
  const [score, setScore] = useState({
    //낮을수록 전자(Larger, Light, Fruity, Creamy)
    //높을수록 후자(Ale, Heavy, Not Fruity, Crispy)
    largerOrAle: 0,
    drinkability: 0,
    fruity: 0,
    alcohol: 0,
  });
  const [index, setIndex] = useState(0);
  const history = useHistory();
  const MAX_INDEX = QnA.length;

  useEffect(() => {
    if (index === MAX_INDEX) {
      history.push("/result", { params: score });
    }
  }, [index]);

  const answerClicked = (item) => {
    console.log(item);
    for (const key in item) {
      setScore((prev) => ({
        ...prev,
        [key]: prev[key] + item[key],
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
                {QnA[index].answers.map(({ answer, score }) => {
                  return (
                    <Answer onClick={() => answerClicked(score)}>
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
