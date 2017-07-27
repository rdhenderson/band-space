import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { authOps, venueOps } from '../../../state/ducks';
import Home from './Home'

function mapStateToProps(state) {
  return {
    	user: state.user.currUser,
      isAuth: state.user.isAuth,
      venues: state.venue.venueList,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...authOps, ...venueOps }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
