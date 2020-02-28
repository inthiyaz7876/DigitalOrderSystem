import React from 'react';
import './App.css';
import Summary from "./summary";
import HomePage from './container/homePage';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Summary} />
        <Route path='/homePage' component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
