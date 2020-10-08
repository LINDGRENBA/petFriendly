import React from 'react';
import {Link} from 'react-router-dom';
import './NavMenu.css';
import logo from './../images/logo-green.png'

function NavMenu () {
    
  return (
    <React.Fragment>
      <div style={{textDecoration: 'none'}} className="box-area">
        <header>
          <div className="wrapper">
            <div className="brand">
              <img style={{width: "100px"}} src={logo} alt="Logo" />
            </div>
            <div className="links">
              <ul>
                <li>
                  <Link style={{textDecoration: 'none'}, {color: "#F28482"}} className="nav-link" to="/home">Home</Link>
                </li>
                <li>
                  <Link style={{textDecoration: 'none'}, {color: "#F28482"}} className="nav-link" to="/mytrips">MyTrips</Link>
                </li>
                <li>
                  <Link style={{textDecoration: 'none'}, {color: "#F28482"}} className="nav-link" to="/">Sign In</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="banner-area">
          <h2>Welcome to PetFriendly!</h2>
          <p>An app to take the stress out of traveling with your pet.</p>
        </div>
      </div>


    </React.Fragment>
  );
}

export default NavMenu; 