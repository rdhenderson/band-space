import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
// import user actions and destructure
import { actions as userActions } from '../users';
import Menu from './BurgerMenu.js'

class NavMenu extends Component {
  constructor(props){
    super(props)
  }

  render(){

    return(
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <div className="navUser">
          {this.props.isAuth ?
             <Link to={`/profile/${this.props.user._id}`}>
              {this.props.user.profile_image ?
                <div style={{borderRadius: 60, width:200, height: 200, overflow: "hidden" }}>
                  <img
                    className="profile__topbody__left__profblock__imgdiv__pic"
                    src={this.props.user.profile_image.img}
                    style={{
                      width: `${200 * this.props.user.profile_image.scale}px`,
                      height: `${200 * this.props.user.profile_image.scale}px`,
                      "marginLeft": `${(this.props.user.profile_image.position.x * 100) - 50}%`,
                      "marginTop": `${(this.props.user.profile_image.position.y * 100) - 50}%`,
                      "transform": `rotate(${this.props.user.profile_image.rotate}deg)` }}
                    />
                </div>
                :
                <div>
                 <img className="navUser__icon" src="./img/user.svg" />
                </div>
            }
          </Link>
              :
              <Link to="/profile">
                <img className="navUser__icon" src="./img/profile.svg" />
              </Link>
             }
          <p className="navUser__userName">
            {this.props.isAuth ? this.props.user.email : "Guest User" }
          </p>
        </div>
        <br/>
        <Link to="/">
          <div className="navLinks">
            <img className="navLinks__icon" src="./img/home.svg" />
            <p id="home" className="menu-item">Home</p>
          </div>
        </Link>

        { !this.props.isAuth ? (

          <div className="navLinks">
            <img className="navLinks__icon" src="./img/login.svg" />
            <p id="home" className="menu-item">
              <Link to="/login">Log In</Link> /
              <Link to="/signup">Signup</Link></p>
          </div>
        ) : (
          <Link to="/">
            <div className="navLinks">
              <img className="navLinks__icon" src="./img/logout.svg" />
              <p className="menu-item" onClick={this.props.handleLogout}> Log Out </p>
            </div>
          </Link>
        )}
        <Link to="/gigs">
          <div className="navLinks">
            <img className="navLinks__icon" src="./img/map.svg" />
            <p id="gigFind" className="menu-item">Find Gigs</p>
          </div>
        </Link>
        <Link to="/creategroup">
          <div className="navLinks">
            <img className="navLinks__icon" src="./img/addgroup.svg" />
            <p id="createGroup" className="menu-item">Create a Group</p>
          </div>
        </Link>
        <Link to="/managegroup">
          <div className="navLinks">
            <img className="navLinks__icon" src="./img/group.svg" />
            <p id="manageGroup" className="menu-item">Manage Groups</p>
          </div>
        </Link>
        <Link to="/testgroup"> <p id="testGroup" className="menu-item">Group Profile</p> </Link>
      </Menu>
    )
  }

}




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
