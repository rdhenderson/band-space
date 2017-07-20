import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'

// import components
import ProfileForm from './ProfileForm'
import ThirdPartyAuth from '../common/ThirdPartyAuth'
import GuitarFloat from '../../components/GuitarFloat'

class ProfilePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      makeEdit : false,
      showConnect: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleConnect = this.toggleConnect.bind(this);
  }

  handleSubmit(values) {
    event.preventDefault();
    console.log("Edited Profile", values);
    // axios.post('/api/users/profile', {
    //   email: values.email,
    //   password: values.password,
    // })
    // .then( ({ data }) => {
    //   // this.props.history.push('/profile');
    // }).catch(err => console.log(err));
  }

  toggleEdit(){
    const newState = { makeEdit: !this.state.makeEdit }
    this.setState(newState);
  }

  toggleConnect(){
    const newState = { showConnect: !this.state.showConnect }
    this.setState(newState);
  }

  render(){
    let user = this.props.user.user;

    return (
    <div>
      <div>
        <div><h4>Name:</h4> {user && user.name}</div>
        <div><h4>Username:</h4> {user && user.username}</div>
        <div><h4>Email:</h4> {user && user.email}</div>
        <br/><br/>
      </div>
      <button onClick={this.toggleEdit}>Edit Profile</button>
      {this.state.makeEdit && (
        <ProfileForm user={user} onSubmit={this.handleSubmit}/>
      )}
      <button onClick={this.toggleConnect}>Connect Services</button>
      {this.state.showConnect && (
        <ThirdPartyAuth connect={true} />
      )}
    </div>

    )
  }
}

export default ProfilePage;
