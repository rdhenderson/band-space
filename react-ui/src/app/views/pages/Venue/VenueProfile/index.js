import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'

import { actions as venueActions } from '../../../../state/ducks/venue'
import { getVenueList, getVenue, isVenueError, isVenueLoading } from '../../../../state/ducks/venue/reducer'
import { actions as modalActions } from '../../../../state/ducks/modal'

import VenueProfile from './VenueProfile'

function mapStateToProps(state, ownProps) {
  return {
    	currUser: state.auth.user,
      isAuth: state.auth.isAuth,
      venues: getVenueList(state),
      venue: getVenue(state, ownProps.match.params.id),
      error: isVenueError(state),
      isLoading: isVenueLoading(state),
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...venueActions, ...modalActions }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VenueProfile));
