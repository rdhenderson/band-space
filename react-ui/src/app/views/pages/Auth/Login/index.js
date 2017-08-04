import Login from './Login.js';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as authActions } from '../../../../state/ducks/auth'
import { isAuthorized } from '../../../../state/ducks/auth/reducer.js'
function mapStateToProps(state) {
  return {
    isAuth: isAuthorized(state),
  };
}

function mapDispatchToProps(dispatch){
  // const { loginUser } = authActions;
  return bindActionCreators({...authActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
