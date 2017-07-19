import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { loginUser } from '../actions/userActions'

import axios from "axios";

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
          {this.state.signUp === true &&
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

              <div className="uSignup__left__oauth">
                <div className="google-btn login">
                  <div className="google-icon-wrapper">
                    <img className="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                  </div>
                  <p className="btn-text"><b>Sign Up with Google</b></p>
                </div>
                <div className="google-btn">
                  <div className="google-icon-wrapper">
                    <img className="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Facebook_Home_logo_old.svg/1024px-Facebook_Home_logo_old.svg.png"/>
                  </div>
                  <p className="btn-text"><b>Sign Up with FB</b></p>
                </div>
                <div className="google-btn">
                  <div className="google-icon-wrapper">
                    <img className="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/1259px-Twitter_bird_logo_2012.svg.png"/>
                  </div>
                  <p className="btn-text"><b>Sign Up with Twitter</b></p>
                </div>
                <div className="google-btn">
                  <div className="google-icon-wrapper">
                    <img className="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2000px-Spotify_logo_without_text.svg.png"/>
                  </div>
                  <p className="btn-text"><b>Sign Up with Spotify </b></p>
                </div>
              </div>

              <div id="switch">
                <a onClick={this.logSignSwitch}> Already a member? Log in here </a>
              </div>
            </div>}

          {this.state.signUp === false &&
            <div>
              <h2> Log Into BandSpace ! </h2>
              <p> See if you have any new reviews </p>
              <hr/>
              <form className="uSignup__left__form" role="form" onSubmit={this.handleLoginSubmit}>
                <div id="emaildiv">
                  <input
                    name="email"
                    value={this.state.email}
                    type="text"
                    className="uSignup__left__input"
                    id="lEmail"
                    placeholder="Email"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div id="passworddiv">
                  <input
                    name="password"
                    value={this.state.password}
                    type="password"
                    className="uSignup__left__input"
                    id="lPword"
                    placeholder="Password"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div id="sButton">
                  <button type="submit"> Submit </button>
                </div>
              </form>

              <div className="uSignup__left__oauth">
                <div className="google-btn">
                  <div className="google-icon-wrapper">
                    <img className="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                  </div>
                  <p className="btn-text"><b>Sign in with Google</b></p>
                </div>
                <div className="google-btn">
                  <div className="google-icon-wrapper">
                    <img className="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Facebook_Home_logo_old.svg/1024px-Facebook_Home_logo_old.svg.png"/>
                  </div>
                  <p className="btn-text"><b>Sign in with FB</b></p>
                </div>
                <div className="google-btn">
                  <div className="google-icon-wrapper">
                    <img className="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/1259px-Twitter_bird_logo_2012.svg.png"/>
                  </div>
                  <p className="btn-text"><b>Sign in with Twitter</b></p>
                </div>
                <div className="google-btn">
                  <div className="google-icon-wrapper">
                    <img className="google-icon-svg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2000px-Spotify_logo_without_text.svg.png"/>
                  </div>
                  <p className="btn-text"><b>Sign in with Spotify </b></p>
                </div>
              </div>
              <div id="switch">
                <a onClick={this.logSignSwitch}> Not a member?  Sign Up here </a>
              </div>
            </div>}


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
