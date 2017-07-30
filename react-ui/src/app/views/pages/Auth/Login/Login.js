import React, { Component } from 'react';
import axios from "axios";
import { Link, Redirect } from 'react-router-dom'

// import components
import LoginForm from './LoginForm.js'
import { ThirdPartyAuth } from '../../../components'
import GuitarFloat from '../GuitarFloat'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      redirect: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit({ email, password }) {
    // event.preventDefault();
    this.props.loginUser({email, password});
    //FIXME: Make this an automatic redirect if user is authenticated in store.
    // this.props.history.push('/profile');
    this.setState({redirect: true});
  }

  render(){

    if ( this.props.isAuth ) return (<Redirect to='/profile'/>);

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
          <LoginForm onSubmit={this.handleSubmit} />
          <ThirdPartyAuth connect={false} />
          <Link to="/auth/signup"> <p>Not a member?  Sign Up here </p></Link>
        </div>
        <div className="uSignup__right">
          <GuitarFloat />
        </div>
      </div>
    </div>
    )
  }
}

export default Login;
