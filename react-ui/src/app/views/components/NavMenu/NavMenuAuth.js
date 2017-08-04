import React from 'react';
import { Link } from 'react-router-dom'
import propTypes from 'prop-types'

const MenuLink = ({path, icon, text, handleClick}) =>(
  <Link to={path}>
    <div className="navLinks">
      <img className="navLinks__icon" src={icon} />
      <p className="menu-item" onClick={handleClick}> {text} </p>
    </div>
  </Link>
);

MenuLink.propTypes = {
  path: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  handleClick: propTypes.func,
}

const ProfileImageLink = ({img, scale, rotate, xpos, ypos}) => (
  <Link to="/profile">
    <div className="navUser__profileborder">
      <img
        className="profile__topbody__left__profblock__imgdiv__pic"
        src={ img }
        style={{
      width: `${140 * scale}px`,
      height: `${140 * scale}px`,
      "marginLeft": `${(xpos * 100) - 80}%`,
      "marginTop": `${(ypos * 100) - 80}%`,
      "transform": `rotate(${rotate}deg)`
        }}
      />
    </div>
  </Link>
) 

ProfileImageLink.propTypes = {
  img: propTypes.string.isRequired,
  scale: propTypes.number.isRequired,
  rotate: propTypes.number.isRequired,
  xpos: propTypes.number.isRequired,
  ypos: propTypes.number.isRequired,
}

const NavMenuAuth = ({user, logoutUser}) => {
  if (!user.profile_image) return (<h1> loading... </h1>);
  return (
    <div>
      <div className="navUser">
        <ProfileImageLink {...user.profile_image} />
        <p className="navUser__userName">
          {user.email}
        </p>
      </div>

      <br/>

      <MenuLink path="/" icon="/img/logout.svg" text="Log Out" handleClick={logoutUser} />
      <MenuLink path="/" icon="/img/home.svg" text="Home" />
      <MenuLink path="/venues" icon="/img/stage.svg" text="Venues" />
      <MenuLink path="/users" icon="/img/user.svg" text="Users" />
      <MenuLink path="/group" icon="/img/group.svg" text="Groups" />
      <MenuLink path="/gigs" icon="/img/map.svg" text="Gigs" />
      <MenuLink path="/creategroups" icon="/img/addgroup.svg" text="Create A Group" />


    </div>
  );
}
export default NavMenuAuth
