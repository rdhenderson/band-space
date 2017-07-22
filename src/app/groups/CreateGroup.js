import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { Field, FieldArray, reduxForm } from 'redux-form'
import BandMemberValidate from './BandMemberValidate';
import Dropzone from 'react-dropzone';
import axios from 'axios'
import helpers from '../helpers'

const renderMembers = ({fields, meta: { touched, error } }) => {
  return (
    <ul className="createGroup__body__left__members">
      {fields.map((member, index) =>
        <div key={index} className="createGroup__body__left__members__item">
          <li>
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
              name={`${member}.email`}
              type="text"
              className="createGroup__body__left__members__item__field"
              component="input"
              label="Email"
              placeholder="Email"
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
            src="/img/remove.svg"
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
          src="/img/add.svg"
          onClick={() => fields.push({})}
        />
        <p>Add Member</p>
        {touched && error && <span>{error}</span>}
      </li>
    </ul>
  );
}

class CreateGroup extends Component {
  constructor(props) {
    super(props);

    this.initializeMembers = this.initializeMembers.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  initializeMembers(){
    const initData = {
      members: [{
        name: this.props.user.user.name,
        email: this.props.user.user.email,
      }]
    };
    this.props.initialize(initData);
  }

  handleSubmit(values) {
    event.preventDefault();
    const id = this.props.user.user._id
    this.props.addUserGroup(values, id)
    .then( (response) => {
      if (!response.error) {
        this.props.addUserGroupSuccess(response.payload);
        // Get last band added to users band array
        const bands = response.payload.data.bands
        const bandId = bands[bands.length-1];
        //redirect to band profile page
        this.props.history.push(`/groups/${bandId}`)
      } else {
        this.props.addUserGroupFailure(response.payload);
        // this.props.history.push(`/createband`)

      }
      // this.toggleAddGroup();
    });
  }

  componentDidMount(){

    this.initializeMembers();

  }

  render() {

  const { handleSubmit, pristine, reset, submitting } = this.props;

  return (
   <div className="createGroup">
     <div className="createGroup__header">
       <h1> Time to Rock the World </h1>
     </div>

     <form className="createGroup__body" onSubmit={handleSubmit(this.handleSubmit)}>

       <div className="createGroup__body__left">
         <div className="createGroup__body__left__header">
           <h1> The Rockstars </h1>
         </div>

         <div className="createGroup__body__left__name">
           <Field className="createGroup__body__left__name__field" name="name" type="text" component="input" placeholder="What's Your Groups Name?"/>
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
               name="address.street"
               component="input"
               type="text"
               placeholder="Address"
             />
           </div>

           <div className="createGroup__body__right__content__phone">
             <Field
               name="phone"
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
}
export default reduxForm({
  form: 'createGroupForm',  // a unique identifier for this form
  BandMemberValidate,
  enableReinitialize: true,
  // initialValues: {members:[{name: 'django'}]}
})(CreateGroup)

// function mapStateToProps(state) {
//   return {
//     	user: state.user.user,
//       error: state.error,
//       loading: state.loading,
//     };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ ...userActions }, dispatch);
// }

// CreateGroup = reduxForm({
//   form: 'initializeFromState',  // a unique identifier for this form
//   BandMemberValidate
// })(CreateGroup)

// export default connect(
//   state => ({
//     initialValues : {
//       members: [{name: state.user.user.name, email: state.user.user.email, instrument: ""}]
//     },
//     userId: state.user.user._id
// }))(CreateGroup);

// export default reduxForm({
//   form: 'createGroup',     // a unique identifier for this form
//   BandMemberValidate,
//   // initialValues : {
//   //   members: [{name: this.props.user.name, email: this.props.user.email, instrument: ""}]
//   // }
// })(CreateGroup)
// {/* export default CreateGroup; */}
