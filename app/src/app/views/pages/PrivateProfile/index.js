import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as authActions } from '../../../state/ducks/auth'
import { actions as userActions } from '../../../state/ducks/user'
import PrivateProfile from './PrivateProfile'

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    isAuth: state.auth.isAuth,
    error: state.user.error,
    loading: state.user.loading,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({...userActions, ...authActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateProfile);
