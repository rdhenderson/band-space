import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as authActions } from '../../../state/ducks/auth'
import { actions as venueActions } from '../../../state/ducks/venue'
import { actions as userActions } from '../../../state/ducks/user'
import { actions as groupActions } from '../../../state/ducks/group'

import Home from './Home'

function mapStateToProps(state) {
  return {
    	user: state.auth.user,
      isAuth: state.auth.isAuth,
      venues: state.venue.venueList,
      users: state.user.userList,
      groups: state.group.groupList,
      isLoading: state.venue.loading || state.group.loading || state.user.loading,
    };
}

function mapDispatchToProps(dispatch) {
  const actions = { ...authActions, ...venueActions, ...userActions, ...groupActions };
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
