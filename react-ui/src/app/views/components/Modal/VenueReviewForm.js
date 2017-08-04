import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'

class AddReview extends Component {
  constructor(props) {
    super(props);

    this.initializeMembers = this.initializeMembers.bind(this);
  }

  initializeMembers(){
    const initData = {
      name: this.props.user.name,
      user_id: this.props.user._id,
    };
    this.props.initialize(initData);
  }

  componentDidMount(){
    this.initializeMembers();
  }

  render() {
    const { handleSubmit, onSubmit, pristine, reset, submitting } = this.props;
    return (
      <form className="groupProfile__bottombody__botmain__right__writeReview" onSubmit={handleSubmit(onSubmit)}>
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
          name="body"
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

export default reduxForm({
  form: 'addVenueReview'  // a unique identifier for this form
})(AddReview)
