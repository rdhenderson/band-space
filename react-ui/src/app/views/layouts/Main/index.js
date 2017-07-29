import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as authActions } from '../../../state/ducks/auth'

import Main from './Main'

function mapStateToProps(state) {
  return {
    	user: state.auth.user,
      isAuth: state.auth.isAuth,
      error: state.auth.error,
      loading: state.auth.loading,
    };
}

function mapDispatchToProps(dispatch) {
  const { meFromToken } = authActions
  return bindActionCreators({ meFromToken }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
