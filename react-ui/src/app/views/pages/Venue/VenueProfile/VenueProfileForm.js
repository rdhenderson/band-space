import React from 'react'
import { Field, reduxForm } from 'redux-form'

let VenueProfileForm = props => {
  const { handleSubmit, onSubmit } = props

  return (
    <form className="editProfile" onSubmit={ handleSubmit(onSubmit) }>

      <div className="editProfile__header">
        <h1> Edit Venue Information </h1>
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
          placeholder="Tell us about the venue"
        />
      </div>

      <button className="normal-btn " type="submit">Submit</button>

      <br />
    </form>
)};

VenueProfileForm = reduxForm({
  // a unique name for the form
  form: 'venueProfile'
})(VenueProfileForm);

export default VenueProfileForm
