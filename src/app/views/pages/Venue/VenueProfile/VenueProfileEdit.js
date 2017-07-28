import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import StaffFieldArray from './StaffFieldArray'
import ReviewFieldArray from './ReviewFieldArray'

let VenueProfileEdit = props => {
  const { handleSubmit, fieldClass, venue } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <Field
          name="name"
          component="input"
          type="text"
          className={fieldClass}
          placeholder="Name"
        />
        <Field
          name="address"
          component="input"
          type="textarea"
          className={fieldClass}
          placeholder="Street Address"
        />
        <Field
          name="city"
          component="input"
          type="textarea"
          className={fieldClass}
          placeholder="City"
        />
        <Field
          name="state"
          component="input"
          type="textarea"
          className={fieldClass}
          placeholder="State"
        />
        <Field
          name="zipcode"
          component="input"
          type="textarea"
          className={fieldClass}
          placeholder="Zip Code"
        />
        <Field
          name="phone"
          component="input"
          type="textarea"
          className={fieldClass}
          placeholder="Main Phone"
        />
        <Field
          name="capacity"
          component="input"
          type="number"
          className={fieldClass}
          placeholder="Website/URL"
        />
        <Field
          name="url"
          component="input"
          type="text"
          className={fieldClass}
          placeholder="Website/URL"
        />
        <Field
          name="image"
          component="input"
          type="textarea"
          className={fieldClass}
          placeholder="Image Link"
        />

        <FieldArray name="staff" props={venue.staff} component={StaffFieldArray} />

        <FieldArray name="reviews" props={venue.reviews} component={ReviewFieldArray} />

      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

VenueProfileEdit = reduxForm({
  // a unique name for the form
  form: 'profile'
})(VenueProfileEdit)

export default VenueProfileEdit;
