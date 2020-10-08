import React from 'react';
import {Link} from 'react-router-dom';
import './NavMenu.css';

function NavMenu() {
    return (
      <React.Fragment>
        <h1 className="brand">PetFriendly</h1>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/mytrips">MyTrips</Link>
          </li>
          <li>
            <Link to="/">Sign In</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }

export default NavMenu; 