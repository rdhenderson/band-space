import Login from './Login.js';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { authOps } from '../../../../state/ducks/'

function mapStateToProps(state) {
  return {
    user: state.user,
    isAuth: state.user.isAuth,
  };
}

function mapDispatchToProps(dispatch){
  const { loginUser } = authOps;
  return bindActionCreators(loginUser, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
