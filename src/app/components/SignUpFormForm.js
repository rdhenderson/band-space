import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LogInForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="email">Email</label>
        <Field name="email" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <Field name="password" component="input" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

LogInForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LogInForm)

export default LogInForm;
