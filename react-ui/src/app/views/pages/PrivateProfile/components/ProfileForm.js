import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ProfileForm = props => {
  const { handleSubmit, onSubmit } = props

  return (
    <form className="editProfile" onSubmit={ handleSubmit(onSubmit) }>

      <div className="editProfile__header">
        <h1> Edit Your Information </h1>
        {/* <button className="normal-btn editProfile__button" onClick={this.toggleEdit}>Edit Profile</button> */}
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
    </form>
)};

ProfileForm = reduxForm({
  // a unique name for the form
  form: 'userProfile'
})(ProfileForm)

export default ProfileForm;
