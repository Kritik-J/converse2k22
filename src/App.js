import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UI/event.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MyPage from "./components/mypage";
import Home from "./components/home";
import { useState } from "react";
import HomePage from "./components/HomePage";
import BackAnimation from "./components/BackAnimation";
function App() {
  const [page, setPage] = useState(true);

  const changeState = () => {
    setPage(false);
  };
  return (
    <Router>
      <BackAnimation></BackAnimation>
      <HomePage />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/home" component={MyPage} />
      </Switch>
    </Router>
  );
}

export default App;
