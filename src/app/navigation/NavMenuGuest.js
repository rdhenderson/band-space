import React from 'react';
import { Link } from 'react-router-dom'

const NavMenuGuest = () => (
  <div>
    <div className="navUser">
      <img className="navUser__icon" src="/img/profile.svg" />
      <p className="navUser__userName">
        Guest User
      </p>
    </div>
    <br/>

    <Link to="/">
      <div className="navLinks">
        <img className="navLinks__icon" src="/img/home.svg" />
        <p id="home" className="menu-item">Home</p>
      </div>
    </Link>

    <div className="navLinks">
      <img className="navLinks__icon" src="/img/login.svg" />
      <p id="home" className="menu-item">
        <Link to="/login">Log In</Link> /
        <Link to="/signup">Signup</Link></p>
    </div>

    <Link to="/gigs">
      <div className="navLinks">
        <img className="navLinks__icon" src="/img/map.svg" />
        <p id="gigFind" className="menu-item">Find Gigs</p>
      </div>
    </Link>

  </div>
);

export default NavMenuGuest
