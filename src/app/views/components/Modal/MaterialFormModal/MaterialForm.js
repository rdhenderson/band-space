import React from 'react'
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

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

const MaterialTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const MaterialCheckbox = ({ input, label }) => (
  <Checkbox label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}/>
)

const MaterialSelectField = ({ input, label, meta: { touched, error }, children }) => (
  <SelectField
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}/>
)

const MaterialForm = props => {
  const { onSubmit, handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Field name="firstName" component={MaterialTextField} label="First Name"/>
      </div>
      <div>
        <Field name="lastName" component={MaterialTextField} label="Last Name"/>
      </div>
      <div>
        <Field name="email" component={MaterialTextField} label="Email"/>
      </div>
      <div>
        <Field name="sex" component={RadioButtonGroup}>
          <RadioButton value="male" label="male"/>
          <RadioButton value="female" label="female"/>
        </Field>
      </div>
      <div>
        <Field name="event" component={MaterialSelectField} label="Favorite Color">
          {props.subject.reviews.map( ({name, _id}) =>
            <MenuItem key={_id} value={_id} primaryText={name}/>
          )}
        </Field>
      </div>
      <div>
        <Field name="employed" component={MaterialCheckbox} label="Employed"/>
      </div>
      <div>
        <Field name="notes" component={MaterialTextField} label="Notes" multiLine={true} rows={2}/>
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
