import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import UserPrivateProfile from './UserPrivateProfile';
import Main from '../../containers/Main';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

function mapStateToProps(state) {
  return {
    user: state.user,
    isAuth: state.user.isAuth,
  };
}

function mapDispatchToProps(dispatch){
  // return bindActionCreators({ loginUser }, dispatch);
}

export default connect(mapStateToProps)(UserPrivateProfile);
