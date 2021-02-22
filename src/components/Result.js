import { useLocation } from "react-router-dom";
const Result = () => {
  const location = useLocation();
  const myparam = location.state.params;
  console.log(myparam);

  return (
    <div>
      <h1>RESULT PAGE</h1>
      <h2>{myparam.LargerOrAle}</h2>
      <h2>{myparam.Drinkability}</h2>
      <h2>{myparam.Fruity}</h2>
      <h2>{myparam.Alcohol}</h2>
    </div>
  );
};

export default Result;
