import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as groupActions } from '../../../../state/ducks/group'

import GroupList from './GroupList';

function mapStateToProps(state) {
  return {
    groups: state.group.groupList,
    isLoading: state.group.loading,
    error: state.group.error,
    currentUser: state.auth.user,
    isAuth: state.auth.isAuth,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { ...groupActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
