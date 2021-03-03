import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";
import QuestionPage from "./components/QuestionPage";
import Result from "./components/Result";
import Beers from "./components/Beers";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/result" component={Result} />
      {/* <Route path="/result/:id" component={Beers} /> */}
      <Route path="/start" component={QuestionPage} />
    </Router>
  );
};

export default App;
