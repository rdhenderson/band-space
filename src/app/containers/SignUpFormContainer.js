import SignUpForm from '../components/user_signup.js';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { loginUser } from '../actions/userActions.js'


function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ loginUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
