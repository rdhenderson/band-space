import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as userActions, selectors as userSelectors } from '../../../../state/ducks/user'
import UserList from './UserList';


const { getAuthUser, getAllUsers } = userSelectors;


function mapStateToProps(state) {

  return {
    users: getAllUsers(state),
    currUser: getAuthUser(state),

    isLoading: state.user.loading,
    error: state.user.error,
    isAuth: state.auth.isAuth,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { ...userActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
