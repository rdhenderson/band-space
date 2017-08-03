import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as venueActions } from '../../../../state/ducks/venue'
import { actions as searchActions } from '../../../../state/ducks/search'
import { getVenueList, isVenueLoading, isVenueError } from '../../../../state/ducks/venue/reducer'

import VenueList from './VenueList'

function mapStateToProps(state) {
  return {
    	user: state.auth.user,
      isAuth: state.auth.isAuth,

      isLoading: isVenueLoading(state),
      error: isVenueError(state),
      venues: getVenueList(state),
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({...venueActions, ...searchActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VenueList);
