import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SignUpForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <Field
          name="name"
          component="input"
          type="text"
          className="uSignup__left__input"
          placeholder="Name"
        />
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
        <Field
          name="confirm_password"
          component="input"
          type="password"
          className="uSignup__left__input"
          placeholder="Confirm Password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

SignUpForm = reduxForm({
  // a unique name for the form
  form: 'signup',
})(SignUpForm)

export default SignUpForm;
