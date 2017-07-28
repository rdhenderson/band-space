import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as userActions } from '../../../../state/ducks/user'

import UserProfile from './UserProfile';

function mapStateToProps(state) {
  return {
    user: state.user.user,
    isLoading: state.user.loading,

    error: state.user.error,
    isAuth: state.auth.isAuth,
    currentUser: state.auth.user

  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { ...userActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
