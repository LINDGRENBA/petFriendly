import React from 'react';
import './../App.css';
import './NavMenu';
import NavMenu from './NavMenu';
import TripControl from './TripControl';
import SearchControl from './SearchControl'
import Signin from './Signin';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './../custom.css';

function App() {
  return (
    <div className="container">
      <Router>
        <NavMenu />
        <div className="content">
          <Switch>
            <Route exact path="/home">
              <SearchControl />
            </Route>
            <Route exact path="/">
              <Signin />
            </Route>
            <Route exact path="/mytrips">
              <TripControl />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
