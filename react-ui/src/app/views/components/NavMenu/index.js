import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as authActions } from '../../../state/ducks/auth'
import { getAuthUser, isAuthorized, isAuthLoading } from '../../../state/ducks/auth/reducer'

import NavMenu from './NavMenu'

function mapStateToProps(state) {
  return {
  	user: getAuthUser(state),
    isAuth: isAuthorized(state),
    isLoading: isAuthLoading(state),
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({...authActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
