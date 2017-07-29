import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as authActions } from '../../../state/ducks/auth'
import { actions as venueActions } from '../../../state/ducks/venue'

import AddReview from './AddReview'

function mapStateToProps(state) {
  return {
    user: state.auth.user,
    isAuth: state.auth.isAuth,
    error: state.venue.error,
    loading: state.venue.loading,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({...authActions, ...venueActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
