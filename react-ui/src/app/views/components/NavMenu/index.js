import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as authActions } from '../../../state/ducks/auth'
import NavMenu from './NavMenu'

function mapStateToProps(state) {
  return {
    	user: state.auth.user,
      isAuth: state.auth.isAuth,
      isLoading: state.auth.isLoading,
    };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({...authActions}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
