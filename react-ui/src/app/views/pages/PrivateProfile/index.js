import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as authActions } from '../../../state/ducks/auth'
import { actions as userActions } from '../../../state/ducks/user'
import { selectors as userSelect } from '../../../state/ducks/user'

import PrivateProfile from './PrivateProfile'

function mapStateToProps(state) {
  const { getAuthUser, getAuthProfileImage } = userSelect;

  return {
    user: state.user.user,
    authId: state.auth.id,
    isAuth: state.auth.isAuth,
    error: state.auth.error,
    isLoading: state.user.loading,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({...userActions, ...authActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateProfile);
