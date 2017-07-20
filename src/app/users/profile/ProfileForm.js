import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ProfileForm = props => {
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
          type="textarea"
          className="uSignup__left__input"
          placeholder="Password"ç
        />

          <Field
          name="spotify"
          component="input"
          type="textarea"
          className="uSignup__left__input"
          placeholder="Spotify"
          />

          <Field
          name="genre"
          component="input"
          type= "textarea"
          className="uSignup__left__input"
          placeholder="Genre"
          />
           <Field
          name="band"
          component="input"
          type= "textarea"
          className="uSignup__left__input"
          placeholder="Band"
          />
           <Field
          name="venue"
          component="input"
          type= "textarea"
          className="uSignup__left__input"
          placeholder="Venue"
          />



      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

ProfileForm = reduxForm({
  // a unique name for the form
  form: 'profile'
})(ProfileForm)

export default ProfileForm;
