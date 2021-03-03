import React from "react";
import Loader from "./LoadingBar/Loader";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

const LoadingPage = (props) => {
  const history = useHistory();
  const score = props.score;
  let result = "";
  //점수 집계
  score.E_I < 2 ? (result += "E") : (result += "I");
  score.S_N < 2 ? (result += "S") : (result += "N");
  score.T_F < 2 ? (result += "T") : (result += "F");
  score.J_P < 2 ? (result += "J") : (result += "P");

  useEffect(() => {
    setTimeout(() => {
      history.push(`/${result}`, { result });
    }, 5000);
  }, []);

  return <h1>Loading</h1>;
};

export default LoadingPage;
