import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import axios from "axios";

// const Signupform = ({match}) => (
//   <div>
//      <h2> Sign Up for BandSpace today! </h2>
//       <p> Get connecting with other working musicians and venues in your area </p>
//       <hr/>
//       <form action="#">
//         <div id="name">
//           <input className="uSignup__left__input" name="name" id="name" placeholder="Name" />
//         </div>
//         <div id="maildiv">
//           <input className="uSignup__left__input" name="email" id="email" placeholder="Email" />
//         </div>
//         <div id="passdiv">
//           <input className="uSignup__left__input" name="pword" id="pword" type="password" placeholder="Password" />
//         </div>
//         <div id="zipdiv">
//           <input className="uSignup__left__input" name="zipcode" id="zipcode" placeholder="Zip Code" />
//         </div>
//         <div id="phondiv">
//           <h3>Phone Number </h3>
//           <input className="uSignup__left__input" name="phonenumber" id="phonenumber" placeholder="123-456-7890" />
//         </div>
//         <div id="check div">
//           <div id="type">
//             <input  type="radio" name="Role" value="Artist" /> Musician
//             <input  type="radio" name="Role" value="Staff" checked /> Venue Staff
//             <input  type="radio" name="Role" value="Both" /> Both
//           </div>
//         </div>
//         <div id="sButton">
//           <button type="submit"> Submit </button>
//         </div>
//       </form>
//       <div id="switch">
//           <p> already a member? </p> <Link to={`${match.url}/login`}> Log in here </Link>
//       </div>
//     </div>
//  )
//
// const Loginform = ({ match }) => (
// <div>
//    <h2> Log Into BandSpace ! </h2>
//     <p> See if you have any new reviews </p>
//     <hr/>
//     <form action="#">
//       <div id="emaildiv">
//         <input className="uSignup__left__input" name="email" id="email" placeholder="Email" />
//       </div>
//       <div id="passworddiv">
//         <input className="uSignup__left__input" name="pword" id="pword" type="password" placeholder="Password" />
//       </div>
//       <div id="sButton">
//         <button type="submit"> Submit </button>
//       </div>
//     </form>
//     <div id="switch">
//         <p> Not a member? </p> <Link to={`${match.url}/signup`}>  Sign Up Here </Link>
//     </div>
//   </div>
// )

class Signup extends Component {

  constructor(props) {
    super(props)
    this.state = {
      sName: "",
      sEmail: "",
      sPword: "",
      sZipcode: "",
      sPhonenumber:"",
      sRole: ""
    }

    this.runSignup = this.runSignup.bind(this);
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

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

  render(){
    return (
      <div className="uSignup">
        <div className="uSignup__left">
          {/* <Route path={`${match.url}/login`} component={Loginform}/>
          <Route path={`${match.url}/signup`} component={Signupform}/> */}
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
                {/* <div id="check div">
                  <div id="type">
                    <input  type="radio" name="sRole" value="Artist" onChange={this.handleInputChange} checked={this.state.sRole === 'Artist'} /> Musician
                    <input  type="radio" name="sRole" value="Staff" onChange={this.handleInputChange} checked={this.state.sRole === 'Staff'} /> Venue Staff
                    <input  type="radio" name="sRole" value="Both" onChange={this.handleInputChange} checked={this.state.sRole === 'Both'} /> Both
                  </div>
                </div> */}
                <div id="sButton">
                  <button type="submit"> Submit </button>
                </div>
              </form>
              <div id="switch">
                  {/* <p> already a member? </p> <Link to={`${match.url}/login`}> Log in here </Link> */}
              </div>
            </div>

            <br/>
            <br/>
            <br/>
            <br/>

            <div>
               <h2> Log Into BandSpace ! </h2>
                <p> See if you have any new reviews </p>
                <hr/>
                <form action="#">
                  <div id="emaildiv">
                    <input className="uSignup__left__input" name="email" id="email" placeholder="Email" />
                  </div>
                  <div id="passworddiv">
                    <input className="uSignup__left__input" name="pword" id="pword" type="password" placeholder="Password" />
                  </div>
                  <div id="sButton">
                    <button type="submit"> Submit </button>
                  </div>
                </form>
                <div id="switch">
                    {/* <p> Not a member? </p> <Link to={`${match.url}/signup`}>  Sign Up Here </Link> */}
                </div>
              </div>





        </div>

        <div className="uSignup__right">
          <img src="http://lorempixel.com/300/500" />
        </div>

      </div>
    )
  }

}
// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

export default Signup;
