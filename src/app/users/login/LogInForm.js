import React from 'react'
import { Field, reduxForm } from 'redux-form'

let LogInForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <Field
          name="email"
          component="input"
          type="text"
          className="uSignup__left__input"
          placeholder="Email"
        />
        <Field
          name="password"
          component="input"
          type="password"
          className="uSignup__left__input"
          placeholder="Password"
        />
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
