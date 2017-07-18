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
            <Link to="/profile"><a> <img src="http://lorempixel.com/100/100" /> </a> </Link>
            <p> Jimmy Twotones </p>
            <br/>
            <Link to="/"> <a id="home" className="menu-item">Home</a> </Link>
            <Link to="/signup"> <a id="home" className="menu-item">Signup</a> </Link>
            <Link to="/gigs"> <a id="gigFind" className="menu-item" href="/about">Find Gigs</a> </Link>
            <Link to="#"> <a id="createGroup" className="menu-item" href="/contact">Create a Group</a> </Link>
            <Link to="#"> <a id="manageGroup" className="menu-item" href="">Manage Groups</a> </Link>
          </Menu>
        <div id="page-wrap">
          {/* <ul>
            <li><Link to="/">Main</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>

          <hr/> */}



          {/* <div className="navbar">
            <div className="navbar__links">
              <ul>
                <li href="#"> Reviews </li>
                <li href="#"> Talk Shop </li>
                <li href="#"> Jobs </li>
              </ul>
            </div>
            <div className="navbar__logo">
              <h3> <Link to="/"> BandSpace </Link> </h3>
            </div>
            <div className="navbar__profile">
              <p> <Link to="/signup"> Log In/SignUp </Link> </p>
            </div>
          </div> */}

          <Route exact path="/" component={Main}/>
          <Route path="/bandcreate" component={Createband}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/search" component={Search}/>
          <Route path="/gigs" component={Gigs}/>
        </div>
        </main>
      </Router>
  )
  }
}


const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
        // <Link to={`${match.url}/components`}>
        //   Components
        // </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>
//
//     <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )
//
// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )
//
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
