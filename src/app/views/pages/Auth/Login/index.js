import Login from './Login.js';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as authActions } from '../../../../state/ducks/auth'

function mapStateToProps(state) {
  return {
    user: state.auth,
    isAuth: state.auth.isAuth,
  };
}

function mapDispatchToProps(dispatch){
  // const { loginUser } = authActions;
  return bindActionCreators({...authActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
