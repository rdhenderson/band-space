import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import Menu from './BurgerMenu.js'
import NavMenuGuest from './NavMenuGuest'
import NavMenuAuth from './NavMenuAuth'

const NavMenu = ({user, isAuth, handleLogout}) => {
  return (
    <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      {isAuth ? (
        <NavMenuAuth
          userName={user.email}
          handleLogout={handleLogout}
          profileImage={user.profile_image.img}
          profileImageStyle={{
        width: `${180 * user.profile_image.scale}px`,
        height: `${180 * user.profile_image.scale}px`,
        "marginLeft": `${(user.profile_image.xpos * 100) - 150}%`,
        "marginTop": `${(user.profile_image.ypos * 100) - 100}%`,
        "transform": `rotate(${user.profile_image.rotate}deg)`
          }}
        />
      ) : (
        <NavMenuGuest />
      )}
    </Menu>
  )
}

export default NavMenu
