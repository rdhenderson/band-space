import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    props.isAuth ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/auth/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default connect( state => {isAuth: state.auth.isAuth })(PrivateRoute);
