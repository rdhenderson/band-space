import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as venueActions } from '../../../state/ducks/venue'
import { actions as userActions } from '../../../state/ducks/user'
import { actions as groupActions } from '../../../state/ducks/group'

import ImageDisplay from './ImageDisplay'

function mapStateToProps(state) {
  return {
    isAuth: state.auth.isAuth,
    currUser: state.auth.user,
    user: state.user.user,
    error: state.user.error,
    isLoading: state.user.loading,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ ...userActions, ...groupActions, ...venueActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageDisplay);
