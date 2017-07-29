import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import MenuItem from 'material-ui/MenuItem';
import { MUICheckbox, MUITextField, MUISelectField } from '../FormElements'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'firstName', 'lastName', 'email', 'favoriteColor', 'notes' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
  if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}



const MaterialForm = props => {
  const { onSubmit, handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Field name="name" component={MUITextField} label="Venue Name"/>
      </div>
      <div>
        <Field name="description" component={MUITextField} label="Description"/>
      </div>
      <div>
        <Field name="email" component={MUITextField} label="Email"/>
      </div>
      <div>
        <Field name="sex" component={RadioButtonGroup}>
          <RadioButton value="male" label="male"/>
          <RadioButton value="female" label="female"/>
        </Field>
      </div>
      <div>
        <Field name="event" component={MUISelectField} label="Select Event to Review">
          {props.subject.events && props.subject.events.map( ({name, _id}) =>
            <MenuItem key={_id} value={_id} primaryText={name}/>
          )}
        </Field>
      </div>
      <div>
        <Field name="employed" component={MUICheckbox} label="Employed"/>
      </div>
      <div>
        <Field name="notes" component={MUITextField} label="Notes" multiLine={true} rows={2}/>
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiForm',  // a unique identifier for this form
  validate
})(MaterialForm)
