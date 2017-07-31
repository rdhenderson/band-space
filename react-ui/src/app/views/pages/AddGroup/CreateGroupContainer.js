import React, { Component } from 'react';
import CreateGroup from './CreateGroup';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
// import { userActions} from '../modules'
// import actions from '../redux/userActions.js'

// class CreateGroupContainer extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       makeEdit : false,
//       showConnect: false,
//       isAddGroup: false,
//     }
//
//     this.handleSubmit = this.handleSubmit.bind(this);
//
//   }
//
//
//   // handleSubmit( (values) => {
//   //   values.members[0].user_id = props.user._id
//   //   values.members[0].name = props.user.name
//   //   console.log("new group values", values);
//   //   helpers.group.add(values)
//   //   .then( (results) => console.log('group added to mongo', results))
//   // })
//   render() {
//     return (
//       <CreateGroup
//         onSubmit={this.handleSubmit}
//         user={this.props.user.user}
//       />
//   );
//   }
// }

function mapStateToProps(state) {
  return {
    user: state.user,
    isAuth: state.user.isAuth,
    error: state.user.error,
    loading: state.user.loading,
  };
}

function mapDispatchToProps(dispatch){
  // return bindActionCreators({...userActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroup);
