//Here we grab React, and peel component out of the library using ES6 syntax.
import React, { Component } from 'react'
import { NavMenu } from '../../components'
import RootModal from '../../components/Modal/RootModal.js'

class Main extends Component {

  componentDidMount() {
    // If user is not already authenticated
    if (this.props.isAuth) return;
    let token = localStorage.getItem('jwtToken');

    if(!token || token === '') return;
    // fetch user from token (if server deems it's valid token)
    this.props.meFromToken(token);

    this.props.fetchUserList();
    this.props.fetchVenueList();
    this.props.getGroupList();
  }

  render() {
    return (
      <div id="outer-container">
        <NavMenu />
        <div id="page-wrap">
          {this.props.children}
        </div>
        <RootModal />
      </div>
    );
  }
}

export default Main;
