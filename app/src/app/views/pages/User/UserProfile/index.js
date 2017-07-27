import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { actions as userActions } from '../../../state/ducks/user'

import UserProfile from './UserProfile';

function mapStateToProps(state) {
  return {
    user: state.user.user,
    isAuth: state.auth.isAuth,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { ...userActions }, dispatch);
}

export default connect(mapStateToProps)(UserProfile);
