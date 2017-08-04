import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router'

import { actions as venueActions } from '../../../../state/ducks/venue'
import * as venueSelectors from '../../../../state/ducks/venue/reducer'
import { actions as modalActions } from '../../../../state/ducks/modal'

import VenueProfile from './VenueProfile'

const { getVenueList, getVenue, isVenueError, isVenueLoading } = venueSelectors;
// Take venue id from url param
function mapStateToProps(state, { match }) {
  const currentVenueId = match.params.id;
  return {
    	currUser: state.auth.user,
      isAuth: state.auth.isAuth,
      venues: getVenueList(state),
      venue: getVenue(state, currentVenueId),
      error: isVenueError(state),
      isLoading: isVenueLoading(state),
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...venueActions, ...modalActions }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(VenueProfile));
