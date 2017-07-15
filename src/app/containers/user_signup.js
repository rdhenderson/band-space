import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Signup = ({match}) => (
  <div className="uSignup">
    <div className="uSignup__left">
      {/* <Route path={`${match.url}/login`} component={Loginform}/>
      <Route path={`${match.url}/signup`} component={Signupform}/> */}
      <div>
         <h2> Sign Up for BandSpace today! </h2>
          <p> Get connecting with other working musicians and venues in your area </p>
          <hr/>
          <form action="#">
            <div id="name">
              <input className="uSignup__left__input" name="name" id="name" placeholder="Name" />
            </div>
            <div id="maildiv">
              <input className="uSignup__left__input" name="email" id="email" placeholder="Email" />
            </div>
            <div id="passdiv">
              <input className="uSignup__left__input" name="pword" id="pword" type="password" placeholder="Password" />
            </div>
            <div id="zipdiv">
              <input className="uSignup__left__input" name="zipcode" id="zipcode" placeholder="Zip Code" />
            </div>
            <div id="phondiv">
              <h3>Phone Number </h3>
              <input className="uSignup__left__input" name="phonenumber" id="phonenumber" placeholder="123-456-7890" />
            </div>
            <div id="check div">
              <div id="type">
                <input  type="radio" name="Role" value="Artist" /> Musician
                <input  type="radio" name="Role" value="Staff" checked /> Venue Staff
                <input  type="radio" name="Role" value="Both" /> Both
              </div>
            </div>
            <div id="sButton">
              <button type="submit"> Submit </button>
            </div>
          </form>
          <div id="switch">
              <p> already a member? </p> <Link to={`${match.url}/login`}> Log in here </Link>
          </div>
        </div>


    </div>

    <div className="uSignup__right">
      <img src="http://lorempixel.com/300/500" />
    </div>

  </div>

)

const Signupform = ({match}) => (
  <div>
     <h2> Sign Up for BandSpace today! </h2>
      <p> Get connecting with other working musicians and venues in your area </p>
      <hr/>
      <form action="#">
        <div id="name">
          <input className="uSignup__left__input" name="name" id="name" placeholder="Name" />
        </div>
        <div id="maildiv">
          <input className="uSignup__left__input" name="email" id="email" placeholder="Email" />
        </div>
        <div id="passdiv">
          <input className="uSignup__left__input" name="pword" id="pword" type="password" placeholder="Password" />
        </div>
        <div id="zipdiv">
          <input className="uSignup__left__input" name="zipcode" id="zipcode" placeholder="Zip Code" />
        </div>
        <div id="phondiv">
          <h3>Phone Number </h3>
          <input className="uSignup__left__input" name="phonenumber" id="phonenumber" placeholder="123-456-7890" />
        </div>
        <div id="check div">
          <div id="type">
            <input  type="radio" name="Role" value="Artist" /> Musician
            <input  type="radio" name="Role" value="Staff" checked /> Venue Staff
            <input  type="radio" name="Role" value="Both" /> Both
          </div>
        </div>
        <div id="sButton">
          <button type="submit"> Submit </button>
        </div>
      </form>
      <div id="switch">
          <p> already a member? </p> <Link to={`${match.url}/login`}> Log in here </Link>
      </div>
    </div>
 )

const Loginform = ({ match }) => (
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
        <p> Not a member? </p> <Link to={`${match.url}/signup`}>  Sign Up Here </Link>
    </div>
  </div>
)

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

export default Signup;
