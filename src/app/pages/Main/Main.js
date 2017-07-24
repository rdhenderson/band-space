//Here we grab React, and peel component out of the library using ES6 syntax.
import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { actions as userActions } from '../../users';

import NavMenu from '../NavMenu/NavMenuContainer.js'

class Main extends Component {

  componentWillMount() {
    // If user is not already authenticated
    if (this.props.isAuth) return;
    // Get token from local storage, quit if its null
    let token = localStorage.getItem('jwtToken');
    if(!token || token === '') return;

    // fetch user from token (if server deems it's valid token)
    this.props.meFromToken(token)
    .then(({error, payload}) => {
      if (!error) {
        this.props.meFromTokenSuccess(payload);
      } else {
        this.props.meFromTokenFailure(payload);
      }
    });
  }

  render() {
    return (
      <div id="outer-container">
        <NavMenu />
        <div id="page-wrap">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main;
