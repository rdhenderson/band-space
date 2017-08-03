import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as authActions } from '../../../state/ducks/auth'
import { actions as venueActions } from '../../../state/ducks/venue'
import { actions as userActions, selectors as userSelectors } from '../../../state/ducks/user'
import { actions as groupActions } from '../../../state/ducks/group'
import { actions as searchActions } from '../../../state/ducks/search'
import { getVenueList, isVenueLoading } from '../../../state/ducks/venue/reducer'


import Home from './Home'

const { getAuthUser, getAllUsers } = userSelectors;

function mapStateToProps(state) {
  return {
    	user: getAuthUser(state),
      query: state.search.query,
      isAuth: state.auth.isAuth,
      venues: getVenueList(state),
      users: getAllUsers(state),
      groups: state.group.groupList,
      isVenueLoading: isVenueLoading(state),
      isGroupLoading: state.group.loading,
      isUserLoading: state.user.loading,
    };
}

function mapDispatchToProps(dispatch) {
  const actions = { ...authActions, ...venueActions, ...userActions, ...groupActions, ...searchActions };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
