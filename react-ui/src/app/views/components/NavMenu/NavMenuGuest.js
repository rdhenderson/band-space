import React from 'react';
import { Link } from 'react-router-dom'

const NavMenuGuest = () => (
  <div>
    <Link to="/auth/login">
      <div className="navUser">
        <img className="navUser__icon" src="/img/profile.svg" />
        <p className="navUser__userName">
          Guest User
        </p>
      </div>
    </Link>
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
        <Link to="/auth/login">Log In</Link> /
        <Link to="/auth/signup">Signup</Link></p>
    </div>
    <Link to="/venues">
      <div className="navLinks">
        <img className="navLinks__icon" src="/img/stage.svg" />
        <p id="home" className="menu-item">Venues</p>
      </div>
    </Link>

    <Link to="/users">
      <div className="navLinks">
        <img className="navLinks__icon" src="/img/user.svg" />
        <p id="home" className="menu-item">Users</p>
      </div>
    </Link>

    <Link to="/groups">
      <div className="navLinks">
        <img className="navLinks__icon" src="/img/group.svg" />
        <p id="home" className="menu-item">Groups</p>
      </div>
    </Link>
    
    <Link to="/gigs">
      <div className="navLinks">
        <img className="navLinks__icon" src="/img/map.svg" />
        <p id="gigFind" className="menu-item">Find Gigs</p>
      </div>
    </Link>

  </div>
);

export default NavMenuGuest
