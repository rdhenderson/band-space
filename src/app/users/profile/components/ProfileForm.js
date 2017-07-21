import React from 'react'
import { Field, reduxForm } from 'redux-form'

let ProfileForm = props => {
  const { handleSubmit } = props
  return (
  <div className="createGroup">
    <div className="createGroup__header">
      <h1> Time to Rock the World </h1>
    </div>
    <form className="createGroup__body" onSubmit={ handleSubmit }>
      <div className="createGroup__body__left">
        <div className="createGroup__body__left__header">
          <h1> Tell Us About Yourself </h1>
        </div>
        <Field
          name="name"
          component="input"
          type="text"
          className="createGroup__body__left__members__item__field"
          placeholder="Name"
        />
        <Field
          name="profile_image"
          component="input"
          type="text"
          className="createGroup__body__left__members__item__field"
          placeholder="Link a Picture"
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
          component="input"
          type="textarea"
          className="createGroup__body__left__members__item__field"
          placeholder="Tell us about yourself"
        />
      </div>
      <div className="createGroup__body__right">
        <div className="createGroup__body__right__content">
          <h1> Tell Us More? </h1>
          <div className="createGroup__body__right__content__header">
            <div className="createGroup__body__right__name">
              {/* <Field className="createGroup__body__right__name__field" name="name" type="text" component="input" placeholder="What's Your Groups Name?"/> */}
            </div>
            <div className="createGroup__body__right__members">
              {/* <FieldArray name="members" component={renderMembers}/> */}
            </div>
          </div>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
)};

ProfileForm = reduxForm({
  // a unique name for the form
  form: 'userProfile'
})(ProfileForm)

export default ProfileForm;
