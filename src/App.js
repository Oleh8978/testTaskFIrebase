import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import style from "./styles.css";
import Aut from "./aut/reg";
import AutD from "./aut/regDesk";
import Log from "./log/log";
import LogD from "./log/logDesc";
import Timers from "./timBoth/timBoth";
import { AuthProvider } from "./AuthChecker/authChecker";
import useWindowDimensions from "./checker/checker";

export default function App() {
  // const { height, width } = useWindowDimensions();

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Timers} />
          <Route exact path="/login" component={LogD} />
          <Route exact path="/register" component={AutD} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}
