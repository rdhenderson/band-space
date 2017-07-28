import React from 'react';
import { connect } from "react-redux";

import NavMenu from './NavMenu'

function mapStateToProps(state) {
  return {
    	user: state.auth.user,
      isAuth: state.auth.isAuth,
      isLoading: state.auth.isLoading,
    };
}

export default connect(mapStateToProps)(NavMenu);
