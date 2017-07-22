import React, { Component } from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'

import {addReview} from '../../helpers/index.js'

class WriteReview extends Component{
    constructor(props) {
    super(props);
  }

  render(props){
    const { handleSubmit, pristine, reset, submitting } = props;
    return(
    <div className="groupProfile__bottombody__botmain__right__writeReview">
      <form className="groupProfile__bottombody__botmain__right__writeReview__form" onSubmit={handleSubmit( (values) => {
        console.log("review", values);
        addReview(values)
        .then( (results) => console.log('group added to mongo', results))
      })
      }>
      </form>
      <h1> test </h1>
    </div>
  )
  }
}

export default reduxForm({
  form: 'writeReview',  // a unique identifier for this form
})(WriteReview)

// export default WriteReview;
