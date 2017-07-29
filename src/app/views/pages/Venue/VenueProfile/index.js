import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as venueActions } from '../../../../state/ducks/venue'
import { actions as modalActions } from '../../../../state/ducks/modal'

import VenueProfile from './VenueProfile'

function mapStateToProps(state) {
  return {
    	currUser: state.auth.user,
      isAuth: state.auth.isAuth,
      venues: state.venue.venueList,
      venue: state.venue.venue,
      error: state.venue.error,
      isLoading: state.venue.loading,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...venueActions, ...modalActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueProfile);
