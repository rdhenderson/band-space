import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as authActions } from '../../../state/ducks/auth'
import { actions as userActions } from '../../../state/ducks/user'
import {
  getAuthUser,
  getAuthId,
  isAuthorized,
  isAuthLoading,
  isAuthError } from '../../../state/ducks/auth/reducer.js'

import PrivateProfile from './PrivateProfile'

function mapStateToProps(state) {

  return {
    user: getAuthUser(state),
    authId: getAuthId(state),
    isAuth: isAuthorized(state),
    error: isAuthError(state),
    isLoading: isAuthLoading(state),
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({...userActions, ...authActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateProfile);
