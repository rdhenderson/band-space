import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as userActions, selectors as userSelectors } from '../../../../state/ducks/user'

import UserProfile from './UserProfile';

const { getAuthUser, getUserByUrl } = userSelectors;

function mapStateToProps(state, ownProps) {
  return {
    user: getUserByUrl(state, ownProps),
    currentUser: getAuthUser(state),
    isLoading: state.user.loading,
    error: state.user.error,
    isAuth: state.auth.isAuth,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { ...userActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
