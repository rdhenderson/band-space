import React from 'react'
import { Field, reduxForm } from 'redux-form'

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form className="simpleForm" onSubmit={handleSubmit}>
      <div>
        <label>Group Name</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Group Name"
            className="simpleForm__title"
          />
        </div>
      </div>
      <div>
        <label>Description</label>
        <div>
          <Field
            name="notes"
            component="textarea"
            placeholder="Bio"
            className="simpleForm__description"
          />
        </div>
      </div>
      <div>
        <button  className="normal-btn" type="submit" disabled={pristine || submitting}>Submit</button>
        <button className="normal-btn" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'simple'  // a unique identifier for this form
})(SimpleForm)
