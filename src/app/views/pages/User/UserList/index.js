import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as userActions } from '../../../../state/ducks/user'

import UserList from './UserList';

function mapStateToProps(state) {
  return {
    users: state.user.userList,
    isLoading: state.user.loading,
    error: state.user.error,
    currUser: state.auth.user,
    isAuth: state.auth.isAuth,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { ...userActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
