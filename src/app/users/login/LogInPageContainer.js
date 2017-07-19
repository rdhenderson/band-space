import LogInPage from './LogInPage.js';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { loginUser } from '../redux/userActions.js'

function mapStateToProps(state) {
  return {
    user: state.user,
    isAuth: state.user.isAuth,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ loginUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
