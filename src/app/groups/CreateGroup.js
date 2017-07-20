import React, { Component } from 'react';
import { connect } from "react-redux";
import { Field, FieldArray, reduxForm } from 'redux-form'
import BandMemberValidate from './BandMemberValidate';
import Dropzone from 'react-dropzone';

const renderMembers = ({ fields, meta: { touched, error } }) => (
  <ul className="createGroup__body__left__members">
    {fields.map((member, index) =>
      <div className="createGroup__body__left__members__item">
      <li  key={index}>
        <h4>Member #{index + 1}</h4>
        <Field
          name={`${member}.name`}
          type="text"
          className="createGroup__body__left__members__item__field"
          component="input"
          label="Name"
          placeholder="Name"
        />

        <Field
          name={`${member}.instrument`}
          type="text"
          className="createGroup__body__left__members__item__field"
          component="input"
          label="Instrument"
          placeholder="Instrument"
        />
      </li>
      <img
        className="createGroup__body__left__members__item__remove"
        src="./img/remove.svg"
        onClick={() => fields.remove(index)}
      />
      {/* <button
        type="button"
        title="Remove Member"
        onClick={() => fields.remove(index)}/> */}
      </div>
    )}
    <li className="createGroup__body__left__members__item__adddiv">
      <img
        className="createGroup__body__left__members__item__adddiv__add"
        src="./img/add.svg"
        onClick={() => fields.push({})}
      />
      <p>Add Member</p>
      {touched && error && <span>{error}</span>}
    </li>
  </ul>
)

const CreateGroup = (props) => {
   const { handleSubmit, pristine, reset, submitting } = props
   return (
     <div className="createGroup">
       <div className="createGroup__header">
         <h1> Time to Rock the World </h1>
       </div>

       <form className="createGroup__body" onSubmit={handleSubmit}>

        <div className="createGroup__body__left">
          <div className="createGroup__body__left__header">
            <h1> The Rockstars </h1>
          </div>
            {/* <div className="createGroup__body__left__img">
              <img src="http://lorempixel.com/200/200" />
               {this.state.accepted.length === 0 && <img src="http://lorempixel.com/200/200" />}
              {this.state.accepted.length !==0 && <img src={this.state.accepted.name} /> }
              <Dropzone
                accept="image/jpeg, image/png"
                onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
                >
                  <p>Drop your Band's Profile Picture Here</p>
                </Dropzone>
              </div> */}
          <div className="createGroup__body__left__name">
            <Field className="createGroup__body__left__name__field" name="groupName" type="text" component="input" placeholder="What's Your Groups Name?"/>
          </div>
          <div className="createGroup__body__left__members">
            <FieldArray name="members" component={renderMembers}/>
          </div>
        </div>

        <div className="createGroup__body__right">
          <div className="createGroup__body__right__content">
            <div className="createGroup__body__right__content__header">
              <h1> Boring Stuff </h1>
            </div>
            <div className="createGroup__body__right__content__address">
              <Field
                name="address"
                component="input"
                type="text"
                placeholder="Address"
              />
            </div>

            <div className="createGroup__body__right__content__phone">
              <Field
                name="phonenumber"
                component="input"
                type="text"
                placeholder="Can I have your number?...Can I have it"
              />
            </div>

            <div className="createGroup__body__right__content__description">
              <Field
                name="description"
                component="textarea"
                type="text"
                placeholder="Tell me about yourself...not too much though...maybe just the cool bits"
              />
            </div>
            <div>
              <button className="normal-btn" type="submit" disabled={submitting}>Submit</button>
              <button className="normal-btn" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>

          </div>
        </div>

       </form>
     </div>
  )
}


export default reduxForm({
  form: 'createGroup',     // a unique identifier for this form
  BandMemberValidate
})(CreateGroup)
{/* export default CreateGroup; */}
