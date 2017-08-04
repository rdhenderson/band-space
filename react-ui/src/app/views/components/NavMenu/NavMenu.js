import React from 'react';

import Menu from './BurgerMenu.js'
import NavMenuGuest from './NavMenuGuest'
import NavMenuAuth from './NavMenuAuth'
import Spinner from '../Spinner'

const NavMenu = ({user, isAuth, isLoading, logoutUser}) => {
  if (isLoading || user === undefined) return <Spinner />
  return (

    <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      {isAuth ? (
        <NavMenuAuth
          user={user}
          logoutUser={logoutUser}
        />
      ) : (
        <NavMenuGuest />
      )}
    </Menu>
  )
}

export default NavMenu
