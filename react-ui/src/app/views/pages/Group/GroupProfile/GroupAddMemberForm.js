import React from 'react'
import { Field, reduxForm } from 'redux-form'

let GroupAddMemberForm = props => {
  const { handleSubmit, onSubmit } = props

  return (
    <form className="editProfile" onSubmit={ handleSubmit(onSubmit) }>

      <div className="editProfile__header">
        <h1> Add Group Member Information </h1>
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
          name="email"
          component="input"
          type= "text"
          className="createGroup__body__left__members__item__field"
          placeholder="Email Address"
        />
        <Field
          name="instrument"
          component="input"
          type= "text"
          className="createGroup__body__left__members__item__field"
          placeholder="Instrument"
        />
        
      </div>

      <button className="normal-btn " type="submit">Submit</button>

      <br />
    </form>
)};

GroupAddMemberForm = reduxForm({
  // a unique name for the form
  form: 'groupAddMember'
})(GroupAddMemberForm);

export default GroupAddMemberForm
