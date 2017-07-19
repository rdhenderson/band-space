import React, { Component } from 'react';
import axios from "axios";

import { Link } from 'react-router-dom'

import { loginUser } from '../actions/userActions'
import ThirdPartyAuth from './ThirdPartyAuth.js'
import GuitarFloat from '../components/GuitarFloat.js'

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      password: "",
      zipcode: "",
      phone:"",
      signUp: true
    }

    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.logSignSwitch = this.logSignSwitch.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name
    this.setState({
      [name]: value
    });
  }

  saveUserDetails(user, token) {
    //Save token to local storage for users return
    localStorage.setItem('jwtToken', token);
    this.props.loginUser(user, token);

    //Redirect to /profile
    this.props.history.push('/profile');
    //dispatch USER_LOGIN action to add user to store
  }
  // When a user submits...
  handleSignupSubmit(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
    // Set the parent to have the search term
    axios.post('/api/users/signup', {
      username: this.state.name,
      email: this.state.email,
      password: this.state.password,
      zip: this.state.zip,
      phone: this.state.phone
    })
    .then(({ data }) => {
      this.saveUserDetails(data.user, data.token);
    })
    .catch(err => console.log("ERROR", err));
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    console.log("Email:", this.state.email);
    console.log("Password:", this.state.password);
    axios.post('/api/users/login', {
      username: this.state.email,
      email: this.state.email,
      password: this.state.password,
    })
    .then( ({ data }) => {
      this.saveUserDetails(data.user, data.token);
    })
    .catch(err => console.log(err));
  }

  logSignSwitch(e) {
    e.preventDefault();
    if (this.state.signUp === true){
      this.setState({
        signUp: false
      })
    }
    else{
      this.setState({
        signUp: true
      })
    }
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
            <hr/>
            <p>Login or Register with:</p>
            {/* <a href="/login" class="btn btn-default"><span class="fa fa-user"></span> Local Login</a>
            <a href="/signup" class="btn btn-default"><span class="fa fa-user"></span> Local Signup</a> */}
            <a href="/auth/facebook" className="btn btn-primary"><span className="fa fa-facebook"></span> Facebook</a> |
            <a href="/auth/twitter" className="btn btn-info"><span className="fa fa-spotify"></span> Spotify</a> |
            <a href="/auth/google" className="btn btn-danger"><span className="fa fa-google-plus"></span> Google+</a>
            <hr />
            <form role="form" onSubmit={this.handleSignupSubmit}>
              <div id="sName">
                <input
                  name="username"
                  value={this.state.username}
                  type="text"
                  className="uSignup__left__input"
                  id="sName"
                  placeholder="Name"
                  onChange={this.handleInputChange}
                />
              </div>
              <div id="maildiv">
                <input
                  name="email"
                  value={this.state.email}
                  type="text"
                  className="uSignup__left__input"
                  id="sEmail"
                  placeholder="Email"
                  onChange={this.handleInputChange}
                />
              </div>
              <div id="passdiv">
                <input
                  name="password"
                  value={this.state.password}
                  type="text"
                  className="uSignup__left__input"
                  id="sPword"
                  type="password"
                  placeholder="Password"
                  onChange={this.handleInputChange}
                />
              </div>
              <div id="zipdiv">
                <input
                  name="zipcode"
                  value={this.state.zip}
                  type="text"
                  className="uSignup__left__input"
                  id="sZipcode"
                  placeholder="Zip Code"
                  onChange={this.handleInputChange}
                />
              </div>
              <div id="phondiv">
                <h3>Phone Number </h3>
                <input
                  name="phone"
                  value={this.state.phone}
                  type="text"
                  className="uSignup__left__input"
                  id="phonenumber"
                  placeholder="123-456-7890"
                  onChange={this.handleInputChange}
                />
              </div>

              <div id="sButton">
                <button type="submit"> Submit </button>
              </div>
            </form>

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

export default SignUpForm;
