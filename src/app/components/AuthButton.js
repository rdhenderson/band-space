import React, { Component } from 'react';

const AuthButton = ({imgLink, serviceName }) => (
  <div className="google-btn">
    <div className="google-icon-wrapper">
      <img className="google-icon-svg" src={imgLink}/>
    </div>
    <p className="btn-text"><b>Sign in with {serviceName} </b></p>
  </div>
);

export default AuthButton;
