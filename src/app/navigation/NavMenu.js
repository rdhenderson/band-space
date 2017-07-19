import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
// import user actions and destructure
import { actions as userActions } from '../users';
import Menu from './BurgerMenu.js'

let NavMenu = (props) => (
  <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
    <Link to="/profile"> <img src="http://lorempixel.com/100/100" /> </Link>
    <p>
      {props.isAuth ? props.user.email : "Jimmy Twotones" }
    </p>
    <br/>
    <Link to="/"> <p id="home" className="menu-item">Home</p> </Link>
    { !props.isAuth ? (
      <Link to="/signup"> <p id="home" className="menu-item">Signup</p> </Link>
    ) : (
      <Link to="/"><p className="menu-item" onClick={props.handleLogout}> Log Out </p></Link>
    )}
    <Link to="/gigs"> <p id="gigFind" className="menu-item">Find Gigs</p> </Link>
    <Link to="/creategroup"> <p id="createGroup" className="menu-item">Create a Group</p> </Link>
    <Link to="/managegroup"> <p id="manageGroup" className="menu-item">Manage Groups</p> </Link>
  </Menu>
);

function mapStateToProps(state) {
  return {
    	user: state.user.user,
      isAuth: state.user.isAuth,
      error: state.error,
      loading: state.loading,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...userActions }, dispatch);
}

NavMenu = connect(mapStateToProps, mapDispatchToProps)(NavMenu);
export default NavMenu;
