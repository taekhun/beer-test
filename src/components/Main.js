import styled from "styled-components";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Background>
      <Container>
        <InnerContainer>
          <Title>오늘의 맥주</Title>
          <Link to="/start">
            <StartButton>시작하기</StartButton>
          </Link>
        </InnerContainer>
      </Container>
    </Background>
  );
};

//Styling Area
const Background = styled.div`
  padding: 0;
  margin: 0%;
`;

const Container = styled.div``;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 768px;
  height: 768px;
  /* background-color: gray; */
  border: outset;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 320px;
    height: 320px;
  }
`;

const Title = styled.div``;

const StartButton = styled.button`
  width: 64px;
  height: 24px;
  outline: none;
`;

export default Main;
