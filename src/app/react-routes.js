import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  ReactDOM
} from 'react-router-dom'
import { connect } from "react-redux";
// import { elastic as Menu } from 'react-burger-menu'
import Menu from './components/bMenu.js'

import Auth from '../../server/config/auth.js';

import Main from './containers/Main.js';
import Signup from './containers/user_signup.js';
import Createband from './containers/createband.js';
import Profile from './containers/profile.js';
import Search from './containers/Search.js';
import Gigs from './containers/Gigs.js';
import CreateGroup from './containers/CreateGroup.js';
import ManageGroup from './containers/ManageGroup.js';


// import SignUpPage from './containers/users/signup-page'


class AppRoutes extends Component {
  constructor(props) {
    super(props)

  }
  showSettings (event) {
  event.preventDefault();

}

  render(){
    return(
      <Router>
        <main id="outer-container">
          <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
            <Link to="/profile"> <img src="http://lorempixel.com/100/100" /> </Link>
            <p> Jimmy Twotones </p>
            <br/>
            <Link to="/"> <p id="home" className="menu-item">Home</p> </Link>
            <Link to="/signup"> <p id="home" className="menu-item">Signup</p> </Link>
            <Link to="/gigs"> <p id="gigFind" className="menu-item">Find Gigs</p> </Link>
            <Link to="/creategroup"> <p id="createGroup" className="menu-item">Create a Group</p> </Link>
            <Link to="/managegroup"> <p id="manageGroup" className="menu-item">Manage Groups</p> </Link>
          </Menu>
        <div id="page-wrap">

          <Route exact path="/" component={Main}/>
          <Route path="/bandcreate" component={Createband}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/search" component={Search}/>
          <Route path="/gigs" component={Gigs}/>
          <Route path="/creategroup" component={CreateGroup}/>
          <Route path="/managegroup" component={ManageGroup}/>
        </div>
        </main>
      </Router>
  )
  }
}

//REDUX MAGIC! This puts both of our functions into the Component's props and links them to dispatch
function mapDispatchToProps(dispatch){
  // return bindActionCreators({ incrementCount, decrementCount }, dispatch);
}

//MORE REDUX MAGIC! This function takes in all of our Application State and takes pieces of it and maps it
//to the Component's props.
function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes)
// export default AppRoutes
