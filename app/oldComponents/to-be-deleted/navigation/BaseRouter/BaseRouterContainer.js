import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as userActions } from '../../users';
import BaseRouter from './BaseRouter'

function mapStateToProps(state) {
  return {
    	user: state.user.user,
      isAuth: state.user.isAuth,
      error: state.error,
      loading: state.loading,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...userActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseRouter);
