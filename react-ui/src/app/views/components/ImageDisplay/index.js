import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as venueActions } from '../../../state/ducks/venue'
import { actions as userActions, selectors as userSelectors } from '../../../state/ducks/user'
import { actions as groupActions } from '../../../state/ducks/group'

import ImageDisplay from './ImageDisplay'

const { getAuthUser } = userSelectors;

function mapStateToProps(state, {type, subject_id}) {
  return {
    state,
    isAuth: state.auth.isAuth,
    currUser: state.auth.user,
    user: state.user.user,
    userList: state.user.userList,
    error: state.user.error,
    isLoading: state.user.loading,
    subject: getAuthUser(state)
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ ...userActions, ...groupActions, ...venueActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageDisplay);
