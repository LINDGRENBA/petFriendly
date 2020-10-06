import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';

function NavMenu() {
    return (
      <React.Fragment>
        <h1 className="brand">PetFriendly</h1>
        {/* <NavbarBrand tag={link} to="/"></NavbarBrand> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mytrips-control">MyTrips</Link>
          </li>
          <li>
            <Link to="/signin">Home</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }

export default NavMenu; 