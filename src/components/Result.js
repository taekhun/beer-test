import { useLocation } from "react-router-dom";
const Result = () => {
  const location = useLocation();
  const myparam = location.state.params;
  console.log(myparam);

  return (
    <div>
      <h1>RESULT PAGE</h1>
      <h2>{myparam.A}</h2>
      <h2>{myparam.B}</h2>
      <h2>{myparam.C}</h2>
      <h2>{myparam.D}</h2>
    </div>
  );
};

export default Result;
