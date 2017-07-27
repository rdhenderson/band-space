import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  ReactDOM
} from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
// import user actions and destructure
import { actions as userActions } from '../users';
import { NavMenu } from '../pages'
import RouteList from './RouteList'

class AppRoutes extends Component {

  showSettings (event) {
    // event.preventDefault();
  }

  componentWillMount(){
    // If user is not already authenticated
    if (this.props.isAuth) return;
    // Get token from local storage, quit if its null
    let token = localStorage.getItem('jwtToken');
  	if(!token || token === '') return;

  	// fetch user from token (if server deems it's valid token)
    this.props.meFromToken(token)
    .then((response) => {
      if (!response.error) {
        this.props.meFromTokenSuccess(response.payload);
      } else {
        this.props.meFromTokenFailure(response.payload);
      }
    });
	 }

  render(){
    return(
      <Router>
        <main id="outer-container">
          <NavMenu handleLogout={this.props.logoutUser} />
          <RouteList />
        </main>
      </Router>
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

export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes);
// export default AppRoutes;
//REDUX MAGIC! This puts both of our functions into the Component's props and links them to dispatch
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ incrementCount, decrementCount }, dispatch);
// }
//
// //MORE REDUX MAGIC! This function takes in all of our Application State and takes pieces of it and maps it
// //to the Component's props.
// function mapStateToProps(state) {
//   return {
//
//   };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(AppRoutes)
// // export default AppRoutes
