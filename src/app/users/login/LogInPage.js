import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'

// import components
import ThirdPartyAuth from '../common/ThirdPartyAuth.js'
import LogInForm from './LogInForm.js'
import GuitarFloat from '../../components/GuitarFloat.js'

class LogInPage extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    event.preventDefault();
    axios.post('/api/users/login', {
      email: values.email,
      password: values.password,
    })
    .then( ({ data }) => {
      localStorage.setItem('jwtToken', data.token);
      this.props.loginUser(data.user);
      this.props.history.push('/profile');
    }).catch(err => console.log(err));
  }

  render(){
    return (
    <div>
      <div className="uSignup__top">
        <h1> No Middlemen, No Shady Gigs, Just Music... </h1>
      </div>
      <div className="uSignup">
        <div className="uSignup__left">
          <h2> Log Into BandSpace ! </h2>
          <p> See if you have any new reviews </p>
          <hr/>
          <LogInForm onSubmit={this.handleSubmit} />
          <ThirdPartyAuth />
          <Link to="/signup"> <p>Not a member?  Sign Up here </p></Link>
        </div>
        <div className="uSignup__right">
          <GuitarFloat />
        </div>
      </div>
    </div>
    )
  }
}

export default LogInPage;
