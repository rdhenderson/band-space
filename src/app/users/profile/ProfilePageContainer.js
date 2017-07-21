import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import ProfilePage from './ProfilePage';
import Main from '../../containers/Main';
// import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

// function mapStateToProps(state) {
//   return {
//     user: state.user,
//     isAuth: state.user.isAuth,
//   };
// }

// function mapDispatchToProps(dispatch){
//   // return bindActionCreators({ loginUser }, dispatch);
// }
//
// export default connect(mapStateToProps)(ProfilePage);

let ProfilePageContainer = (props) => (
  <Switch>
    <Route exact path='/profile' component={Main}/>
    <Route path='/profile/:id' component={ProfilePage}/>
  </Switch>
)

export default ProfilePageContainer
