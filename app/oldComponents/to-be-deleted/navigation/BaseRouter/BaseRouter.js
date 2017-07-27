import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import RouteList from './RouteList'

class BaseRouter extends Component {

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
        <NavMenu />
      </Router>
  )
  }
}

export default BaseRouter
