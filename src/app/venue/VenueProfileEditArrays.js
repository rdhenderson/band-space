import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validateVenueForm'

const renderField = props => (
  <div>
    <label>{props.placeholder}</label>
    <div>
      <input {...props}/>
      {props.touched && props.error && <span>{props.error}</span>}
    </div>
  </div>
)

const renderStaff = ({ fields }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>Add Staff</button>
    </li>
    {fields.map((member, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Staff"
          onClick={() => fields.remove(index)}/>
        <h4>Staff #{index + 1}</h4>
        <Field
          name={`${member}.name`}
          type="text"
          component={renderField}
        placeholder="Name"/>
        <Field
          name={`${member}.email`}
          type="text"
          component={renderField}
        placeholder="Email"/>
        <Field
          name={`${member}.role`}
          type="text"
          component={renderField}
        placeholder="Role"/>
        <Field
          name={`${member}.phone`}
          type="text"
          component={renderField}
        placeholder="Phone"/>

        <FieldArray name={`${member}.reviews`} component={renderReviews}/>
      </li>
    )}
  </ul>
)

const renderReviews = ({ fields }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>Add Review</button>
    </li>
    {fields.map((review, index) =>
      <li key={index}>
        <button
          type="button"
          title="Remove Review"
          onClick={() => fields.remove(index)}/>
        <Field
          name={review}
          type="text"
          component={renderField}
          placeholder={`Review #${index + 1}`}/>
        <Field
          name={title}
          type="text"
          component={renderField}
        placeholder='Title'/>
        <Field
          name={body}
          type="textarea"
          component={renderField}
          placeholder='Body'
        />
      </li>
    )}
    {fields.error && <li className="error">{fields.error}</li>}
  </ul>
)

let VenueProfileEditArrays = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="name" type="text" component={renderField} placeholder="Venue Name"/>
      <FieldArray name="staff" component={renderStaff}/>
      <FieldArray name="reviews" component={renderReviews}/>
      <div>
        <button type="submit" disabled={submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

VenueProfileEditArrays = reduxForm({
  // a unique name for the form
  form: 'venueProfileEditArrays',
  validate
})(VenueProfileEditArrays)

export default VenueProfileEditArrays;
