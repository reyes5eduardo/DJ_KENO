import React from "react";
import './App.css';
import GlobalStyle from './components/GlobalStyle';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/pages";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
        <GlobalStyle />
      </Router>
  );
}

export default App;
