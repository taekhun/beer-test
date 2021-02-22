import { useLocation } from "react-router-dom";
const Result = () => {
  const location = useLocation();
  const { largerOrAle, drinkability, fruity, alcohol } = location.state.params;
  let beerResult;
  if (largerOrAle >= 5) {
    beerResult = "IPA";
  } else {
    beerResult = "Cass";
  }

  return (
    <div>
      <h1>RESULT PAGE</h1>
      <h2>{beerResult}</h2>
      {/* 
      <h2>{LargerOrAle}</h2>
      <h2>{Drinkability}</h2>
      <h2>{Fruity}</h2>
      <h2>{Alcohol}</h2> */}
    </div>
  );
};

export default Result;
