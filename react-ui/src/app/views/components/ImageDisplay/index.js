import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as venueActions } from '../../../state/ducks/venue'
import { actions as userActions } from '../../../state/ducks/user'
import { getUserList, isUserError, isUserLoading } from '../../../state/ducks/user/reducer'
import { actions as groupActions } from '../../../state/ducks/group'
import { isAuthorized, getAuthUser } from '../../../state/ducks/auth/reducer'

import ImageDisplay from './ImageDisplay'

function mapStateToProps(state, {type, subject_id}) {
  return {
    isAuth: isAuthorized(state),
    currUser: getAuthUser(state),
    userList: getUserList(state),
    error: isUserError(state),
    isLoading: isUserLoading(state),
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ ...userActions, ...groupActions, ...venueActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageDisplay);
