import React from 'react'
import { Route } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'

const Auth = ({match}) => (
  <div>
    <Route exact path={`${match.url}/login`} component={Login}/>
    <Route path={`${match.url}/signup`} component={Signup}/>
  </div>
)
export default Auth;
