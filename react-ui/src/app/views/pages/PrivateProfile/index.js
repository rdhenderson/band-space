import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as authActions } from '../../../state/ducks/auth'
import { actions as userActions } from '../../../state/ducks/user'

import PrivateProfile from './PrivateProfile'

function mapStateToProps(state) {
  return {
    user: state.user.user,
    authUser: state.auth.user,
    isAuth: state.auth.isAuth,
    error: state.auth.error,
    isLoading: state.auth.loading,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({...userActions, ...authActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateProfile);
