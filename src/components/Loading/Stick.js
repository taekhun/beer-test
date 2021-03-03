import styled, { createGlobalStyle } from "styled-components";

const Loading = () => {
  return (
    <>
      <Container>
        <Stick />
        <Stick />
        <Stick />
        <Stick />
        <Stick />
        <Stick />
      </Container>
      <Title>Loading</Title>
    </>
  );
};

// const theme = {
//   text_color: "purple",
//   stick_color: "purple", //Changes the colour of all sticks
//   stick_length: "30px", //Changes length of all sticks
//   stick_distance: "-8px", //Changes distance between sticks (will need editing after 30px)
// };

const Container = styled.div`
  @import url(https://fonts.googleapis.com/css?family=Lato:100,300,700);
  width: stick_length * 6;
  padding-top: 180px;
  margin: auto;
  vertical-align: middle;
  display: flex;
`;
const Stick = styled.div`
  width: 35px;
  width: purple;
  height: 4px;
  background: purple;
  background: black;
  display: inline-block;
  margin-left: -5px;

  &:nth-child(n) {
    transform: rotate(30deg);
    animation: fall 2s infinite;
  }
  &:nth-child(2n) {
    transform: rotate(-30deg);
    animation: rise 2s infinite;
  }

  @keyframes rise {
    50% {
      transform: rotate(30deg);
    }
  }
  @keyframes fall {
    50% {
      transform: rotate(-30deg);
    }
  }
  @keyframes fade {
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Title = styled.h1`
  font-family: "Lato";
  color: text_color;
  text-transform: uppercase;
  font-size: 1em;
  letter-spacing: 1.5px;
  text-align: center;
  width: 155px;
  margin-top: 20px;
  animation: fade 2s infinite;
`;

export default Loading;
