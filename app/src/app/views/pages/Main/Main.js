//Here we grab React, and peel component out of the library using ES6 syntax.
import React, { Component } from 'react'
import NavMenu from '../NavMenu'

class Main extends Component {

  componentWillMount() {
    // If user is not already authenticated
    if (this.props.isAuth) return;
    let token = localStorage.getItem('jwtToken');

    if(!token || token === '') return;
    // fetch user from token (if server deems it's valid token)
    this.props.meFromToken(token);

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
