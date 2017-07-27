import React from 'react';
import { connect } from "react-redux";

import NavMenu from './NavMenu'

function mapStateToProps(state) {
  return {
    	user: state.user.currUser,
      isAuth: state.user.isAuth,
    };
}

export default connect(mapStateToProps)(NavMenu);
