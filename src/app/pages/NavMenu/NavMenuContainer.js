import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as userActions } from '../../users';
import NavMenu from './NavMenu'

function mapStateToProps(state) {
  return {
    	user: state.user.user,
      isAuth: state.user.isAuth,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...userActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
