import React, { Component } from 'react';
import axios from "axios";

import { Link } from 'react-router-dom'

import SignUpForm from './SignUpForm.js'
import { ThirdPartyAuth } from '../ThirdPartyAuth'
import GuitarFloat from '../GuitarFloat'

class SignUpPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ name, email, password }) {
    // event.preventDefault();
      this.props.signupUser({name, email, password});
      //FIXME: Make this an automatic redirect if user is authenticated in store.
      this.props.history.push('/profile');
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
