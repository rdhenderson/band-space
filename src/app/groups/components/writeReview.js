import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form'

import {addReview} from '../../helpers/index.js'

import {actions as userActions} from '../../users'

class WriteReview extends Component {
  constructor(props) {
    super(props);

    this.initializeMembers = this.initializeMembers.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  initializeMembers(){
    const initData = {
        name: this.props.user.user.name,
        user_id: this.props.user.user._id,
    };
    this.props.initialize(initData);
  }

  handleSubmit(values) {
    event.preventDefault();
    const review = {...values};
    review[this.props.reviewType] = this.props.reviewSub;
    const id = this.props.user.user._id;

    this.props.addReview(review, id)
    .then( (response) => {
      if (!response.error) {
        this.props.addReviewSuccess(response.payload);
        // Get last band added to users band array
      } else {
        this.props.addReviewFailure(response.payload);
        // this.props.history.push(`/createband`)
      }
      // this.toggleAddGroup();
    });
  }

  componentDidMount(){

    this.initializeMembers();

  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <form className="groupProfile__bottombody__botmain__right__writeReview" onSubmit={handleSubmit(this.handleSubmit)}>
        <Field
          name="name"
          className="groupProfile__bottombody__botmain__right__writeReview__name"
          component="input"
          type="text"
          placeholder="Who was this written by"
        />
        <Field
          name="title"
          className="groupProfile__bottombody__botmain__right__writeReview__name"
          component="input"
          type="text"
          placeholder="Title"
        />
        <Field
          name="details"
          className="groupProfile__bottombody__botmain__right__writeReview__review"
          component="textarea"
          type="text"
          placeholder="What did you think of the performance?"
        />
        <div className="groupProfile__bottombody__botmain__right__writeReview__buttons">
          <button className="normal-btn" type="submit" disabled={submitting}>Submit</button>
          <button className="normal-btn" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
        </div>
      </form>
  )
  }
}

WriteReview = reduxForm({
  form: 'writeReview'  // a unique identifier for this form
})(WriteReview)

function mapStateToProps(state) {
  return {
    user: state.user,
    isAuth: state.user.isAuth,
    error: state.user.error,
    loading: state.user.loading,
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({...userActions}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WriteReview);

// export  connect(
//   // state => ({
//   //   // initialValues : {
//   //   //   // members: [{name: state.user.user.name, email: state.user.user.email, instrument: ""}]
//   //   // },
//   //   userId: state.user.user._id
// ))(WriteReview);
//
// // export default WriteReview;
