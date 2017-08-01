import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as authActions } from '../../../state/ducks/auth'
import { actions as userActions, selectors as userSelectors } from '../../../state/ducks/user'
import { actions as groupActions } from '../../../state/ducks/group'
import { actions as venueActions } from '../../../state/ducks/venue'

import Main from './Main'

function mapStateToProps(state) {
  console.log("getAuthUser: ", userSelectors.getAuthUser);
  return {
    	user: userSelectors.getAuthUser(state),
      isAuth: state.auth.isAuth,
      error: state.auth.error,
      loading: state.auth.loading,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...authActions, ...userActions, ...groupActions, ...venueActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
