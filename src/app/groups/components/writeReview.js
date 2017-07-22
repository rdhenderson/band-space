import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form'

import {addReview} from '../../helpers/index.js'

var WriteReview = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return(
    <form className="groupProfile__bottombody__botmain__right__writeReview" onSubmit={handleSubmit( (values) => {
        values.user_id = props.user_id;
        console.log("review", values);
        addReview(values)
        .then( (results) => console.log('group added to mongo', results))
      })
      }>
        <Field
          name="name"
          className="groupProfile__bottombody__botmain__right__writeReview__name"
          component="input"
          type="text"
          placeholder="Who was this written by"
        />
        <Field
          name="review"
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

WriteReview = reduxForm({
  form: 'writeReview',  // a unique identifier for this form
})(WriteReview)

export default connect(
  state => ({
    initialValues : {
      // members: [{name: state.user.user.name, email: state.user.user.email, instrument: ""}]
    },
    userId: state.user.user._id
}))(WriteReview);

// export default WriteReview;
