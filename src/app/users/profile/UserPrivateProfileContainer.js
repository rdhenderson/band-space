import React, { Component } from 'react';
import UserPrivateProfile from './UserPrivateProfile';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import {updateUser, updateUserSuccess, updateUserFailure} from '../redux/userActions.js'
// import actions from '../redux/userActions.js'

function mapStateToProps(state) {
  return {
    user: state.user,
    isAuth: state.user.isAuth,
    error: state.user.error,
    loading: state.user.loading,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateUser, updateUserSuccess, updateUserFailure}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPrivateProfile);
