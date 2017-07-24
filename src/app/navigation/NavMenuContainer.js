import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { actions as userActions } from '../users';

import Menu from './BurgerMenu.js'
import NavMenuGuest from './NavMenuGuest'
import NavMenuAuth from './NavMenuAuth'

class NavMenuContainer extends Component {

  render() {
    const user = this.props.user;

    return (
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        {this.props.isAuth ? (
          <NavMenuAuth
            userName={user.email}
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

}

function mapStateToProps(state) {
  return {
    	user: state.user.user,
      isAuth: state.user.isAuth,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...userActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenuContainer);
