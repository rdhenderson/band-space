import React, { Component } from 'react';
import UserPublicProfile from './UserPUblicProfile';

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

export default connect(mapStateToProps)(UserPublicProfile);
