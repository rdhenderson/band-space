import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import axios from "axios";

import GuitarFloat from '../components/GuitarFloat.js'


class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sName: "",
      sEmail: "",
      sPword: "",
      sZipcode: "",
      sPhonenumber:"",
      sRole: "",
      lEmail: "",
      lPword: "",
      signUp: true
    }

    this.runSignup = this.runSignup.bind(this);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.runLogin = this.runLogin.bind(this);
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
  })

  }

  runSignup(sN, sE, sPw, sZ, sPn){
    console.log(`Name: ${sN}, Email ${sE}, Password: ${sPw}, Zipcode: ${sZ}, Phone: ${sPn}`);
    axios.post('/signup', {
      Name: sN,
      Email: sE,
      Password: sPw,
      Zipcode: sZ,
      Phonenumber: sPn
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));

  }

  // When a user submits...
  handleSignupSubmit(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();
    // Set the parent to have the search term
    this.runSignup(this.state.sName, this.state.sEmail, this.state.sPword, this.state.sZipcode, this.state.sPhonenumber);
  }

  runLogin(lE, lP){
    axios.post('/login', {
      Email: lE,
      Password: lP,
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  handleLoginSubmit(event) {

    event.preventDefault();

    this.runLogin(this.state.lEmail, this.state.lPword);
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
              <form role="form" onSubmit={this.handleSignupSubmit}>
                <div id="sName">
                  <input
                    name="sName"
                    value={this.state.sName}
                    type="text"
                    className="uSignup__left__input"
                    id="sName"
                    placeholder="Name"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div id="maildiv">
                  <input
                    name="sEmail"
                    value={this.state.sEmail}
                    type="text"
                    className="uSignup__left__input"
                    id="sEmail"
                    placeholder="Email"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div id="passdiv">
                  <input
                    name="sPword"
                    value={this.state.sPword}
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
                    name="sZipcode"
                    value={this.state.sZipcode}
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
                    name="sPhonenumber"
                    value={this.state.sPhonenumber}
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
                      name="lEmail"
                      value={this.state.lEmail}
                      type="text"
                      className="uSignup__left__input"
                      id="lEmail"
                      placeholder="Email"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div id="passworddiv">
                    <input
                      name="lPword"
                      value={this.state.lPword}
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

export default Signup;
