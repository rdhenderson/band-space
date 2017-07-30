import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as modalActions } from '../../../../state/ducks/modal'
import { actions as venueActions } from '../../../../state/ducks/venue'

import AddEventReview from './AddEventReview'

function mapStateToProps(state) {
  return {
    	author: state.auth.user,
      isAuth: state.auth.isAuth,
      subject: state.venue.venue,
      venues: state.venue.venueList,
      isLoading: state.venue.loading,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...modalActions, ...venueActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEventReview);
