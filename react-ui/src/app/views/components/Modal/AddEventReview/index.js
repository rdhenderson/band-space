import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as modalActions } from '../../../../state/ducks/modal'
import { actions as venueActions } from '../../../../state/ducks/venue'
import { getVenueList, isVenueLoading } from '../../../../state/ducks/venue/reducer'

import AddEventReview from './AddEventReview'

function mapStateToProps(state) {
  return {
    	author: state.auth.user,
      isAuth: state.auth.isAuth,
      subject: state.venue.venue,
      venues: getVenueList(state),
      isLoading: isVenueLoading(state),
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...modalActions, ...venueActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEventReview);
