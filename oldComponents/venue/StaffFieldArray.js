import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'

const StaffFieldArray = (props) => {

  const { array: { push }, handleSubmit, pristine, reset, submitting } = props
  console.log("Staff variable", staff);
  // const staff = props.fields.staff;
  return (
    <ul>
      <li>
        <button type="button" onClick={() => push('staff', {})}>Add Staff</button>
      </li>
      {staff.map((staff, staffIndex) =>
        <li key={staffIndex}>
          <button
            type="button"
            title="Remove Staff"
            onClick={() => staff.remove(staffIndex)}/>
          <h4>Staff #{staffIndex + 1}</h4>
          <div>
            <label>Name</label>
            <Field name={`${staff}.firstName`} component={firstName =>
              <div>
                <input type="text" {...firstName} placeholder="First Name"/>
                {firstName.touched && firstName.error && <span>{firstName.error}</span>}
              </div>
            }/>
          </div>
          <div>
            <label>Last Name</label>
            <Field name={`${staff}.lastName`} component={lastName =>
              <div>
                <input type="text" {...lastName} placeholder="Last Name"/>
                {lastName.touched && lastName.error && <span>{lastName.error}</span>}
              </div>
            }/>
          </div>
      </li>
    )}
  </ul>
)};

export default StaffFieldArray;
