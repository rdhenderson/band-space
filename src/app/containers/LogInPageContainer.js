import LogInPage from '../components/LogInPage.js';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { loginUser } from '../actions/userActions.js'


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
