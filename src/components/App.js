import React from 'react';
import './../App.css';
import './NavMenu';
import NavMenu from './NavMenu';
import TripControl from './TripControl';

function App() {
  return (
    <React.Fragment>
      <NavMenu />
      <h1>Pet Friendly</h1>
      <p>An app to take the stress out of traveling with your pet.</p>

      <TripControl />
    </React.Fragment>
  );
}

export default App;
