import { useState } from "react";
import { styled } from "styled-component";
import { Router } from "react-router-dom";

import Main from "./components/Main";
import Question from "./components/Question";
import Result from "./components/Result";

const App = () => {
  return (
    <Container>
      <Main />
      <Question />
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
`;

export default App;
