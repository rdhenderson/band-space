import React from 'react';
import { Link } from 'react-router-dom'

const NavMenuAuth = (props) => {
  const { profileImage, userName, profileImageStyle, handleLogout } = props;

  return (
    <div>
      <div className="navUser">
        <Link to="/profile">
          <div className="navUser__profileborder">
            <img
              className="profile__topbody__left__profblock__imgdiv__pic"
              src={ profileImage }
              style={ profileImageStyle }
            />
          </div>
        </Link>
        <p className="navUser__userName">
          {userName}
        </p>
      </div>

      <br/>
      <Link to="/">
        <div className="navLinks">
          <img className="navLinks__icon" src="/img/logout.svg" />
          <p className="menu-item" onClick={()=> props.logoutUser()}> Log Out </p>
        </div>
      </Link>

      <Link to="/">
        <div className="navLinks">
          <img className="navLinks__icon" src="/img/home.svg" />
          <p id="home" className="menu-item">Home</p>
        </div>
      </Link>

      <Link to="/gigs">
        <div className="navLinks">
          <img className="navLinks__icon" src="/img/map.svg" />
          <p id="gigFind" className="menu-item">Find Gigs</p>
        </div>
      </Link>

      <Link to="/creategroup">
        <div className="navLinks">
          <img className="navLinks__icon" src="/img/addgroup.svg" />
          <p id="createGroup" className="menu-item">Create a Group</p>
        </div>
      </Link>
    </div>
  );
}
export default NavMenuAuth
