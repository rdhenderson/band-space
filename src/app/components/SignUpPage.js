import React, { Component } from 'react';
import axios from "axios";

import { Link } from 'react-router-dom'

import SignUpForm from './SignUpForm.js'
import ThirdPartyAuth from './ThirdPartyAuth.js'
import GuitarFloat from '../components/GuitarFloat.js'

class SignUpPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    event.preventDefault();
    axios.post('/api/users/signup', {
      name: values.name,
      email: values.email,
      password: values.password,
    })
    .then( ({ data }) => {
      //Save token to local storage for users return
      localStorage.setItem('jwtToken', data.token);
      this.props.loginUser(data.user, data.token);
      //Redirect to /profile
      this.props.history.push('/profile');
      //dispatch USER_LOGIN action to add user to store
    })
    .catch(err => console.log(err));
  }

  render(){
    return (
    <div>
      <div className="uSignup__top">
        <h1> No Middlemen, No Shady Gigs, Just Music... </h1>
      </div>
      <div className="uSignup">
        <div className="uSignup__left">
          <div>
            <h2> Sign Up for BandSpace today! </h2>
            <p> Get connecting with other working musicians and venues in your area </p>
            <hr />

            <SignUpForm onSubmit={this.handleSubmit} />
            <ThirdPartyAuth />
            <Link to="/login"> <p>Already a member? Log in here </p></Link>

          </div>
        </div>
        <div className="uSignup__right">
          <GuitarFloat />
        </div>
      </div>
    </div>
    )
  }
}

export default SignUpPage;
