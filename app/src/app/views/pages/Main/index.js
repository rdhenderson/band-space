import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as authOps } from '../../../state/ducks/auth'

import Main from './Main'

function mapStateToProps(state) {
  return {
    	user: state.user.currUser,
      isAuth: state.user.isAuth,
      error: state.user.error,
      loading: state.user.loading,
    };
}

function mapDispatchToProps(dispatch) {
  const { meFromToken } = authOps
  return bindActionCreators({ meFromToken }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
