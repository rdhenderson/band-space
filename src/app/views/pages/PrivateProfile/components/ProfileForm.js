import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ProfileForm = props => {
  const { handleSubmit } = props
  return (
  <div className="createGroup">
    <div className="createGroup__header">
      <h1> Time to Rock the World </h1>
    </div>
    <form className="editProfile" onSubmit={ handleSubmit }>
      <div className="createGroup__body__left">
        <div className="createGroup__body__left__header">
          <h1> Tell Us About Yourself </h1>
        </div>
        <div className="editGroupFields">
          <Field
            name="name"
            component="input"
            type="text"
            className="createGroup__body__left__members__item__field"
            placeholder="Name"
          />
          <Field
            name="phone"
            component="input"
            type= "text"
            className="createGroup__body__left__members__item__field"
            placeholder="Phone Number"
          />
          <Field
            name="description"
            component="textarea"
            type="text"
            className="editProfile__textarea"
            placeholder="Tell us about yourself"
          />
          <button className="normal-btn " type="submit">Submit</button>
        </div>
        <br/>

      </div>

    </form>
  </div>
)};

ProfileForm = reduxForm({
  // a unique name for the form
  form: 'userProfile'
})(ProfileForm)

export default ProfileForm;
