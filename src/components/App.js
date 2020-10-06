import React from 'react';
import './../App.css';
import './NavMenu';
import NavMenu from './NavMenu';
import TripControl from './TripControl';
import SearchControl from './SearchControl'
import Signin from './Signin';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavMenu />
      <h2>Welcome to Pet Friendly</h2>
      <p>An app to take the stress out of traveling with your pet.</p>
      <Switch>
        <Route path='/'>
          <SearchControl />
        </Route>
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/mytrips-control'>
          <TripControl />
        </Route>
        {/* <Route path='/signin'>
          
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
