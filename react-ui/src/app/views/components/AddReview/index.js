import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as authActions } from '../../../state/ducks/auth'
import { actions as venueActions } from '../../../state/ducks/venue'
import { getAuthUser } from '../../../state/ducks/user/reducer'
import { isAuthorized } from '../../../state/ducks/auth/reducer'
import { isVenueError, isVenueLoading } from '../../../state/ducks/venue/reducer'

import AddReview from './AddReview'

function mapStateToProps(state) {
  return {
    user: getAuthUser(state),
    isAuth: isAuthorized(state),
    error: isVenueError(state),
    loading: isVenueLoading(state),
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({...authActions, ...venueActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
