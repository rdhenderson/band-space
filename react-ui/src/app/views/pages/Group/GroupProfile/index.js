import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { actions as groupActions } from '../../../../state/ducks/group'

import GroupProfile from './GroupProfile';

function mapStateToProps(state) {
  return {
    isLoading: state.group.loading,
    group: state.group.group,
    error: state.group.error,
    isAuth: state.auth.isAuth,
    currentUser: state.auth.user

  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { ...groupActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupProfile);
