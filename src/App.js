import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";
import ResultPage from "./components/ResultPage";
import Beers from "./components/Beers";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/:id" component={ResultPage} />
    </Router>
  );
};

export default App;
