import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import axios from "axios";


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
              <div id="switch">
                   <p> already a member? </p> <a onClick={this.logSignSwitch}> Log in here </a>
              </div>
            </div>}

            {this.state.signUp === false &&
            <div>
               <h2> Log Into BandSpace ! </h2>
                <p> See if you have any new reviews </p>
                <hr/>
                <form role="form" onSubmit={this.handleLoginSubmit}>
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
                <div id="switch">
                  <p> Not a member? </p> <a onClick={this.logSignSwitch}> Log in here </a>
                </div>
              </div>}


          </div>
        <div className="uSignup__right">
          <img src="http://lorempixel.com/300/500" />
        </div>


    </div>
  </div>
    )
  }

}

export default Signup;
