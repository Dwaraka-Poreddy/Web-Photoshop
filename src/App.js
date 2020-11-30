import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import NewsPaper from "./NewsPaper";
import Magazine from "./Magazine";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/newspaper">
            <NewsPaper />
          </Route>
          <Route path="/magazine">
            <Magazine />
          </Route>
          <Route path="/greet">
            <Header />
          </Route>{" "}
          <Route path="/">
            {" "}
            <Main />
          </Route>{" "}
        </Switch>{" "}
      </Router>{" "}
    </div>
  );
}
