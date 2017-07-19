import AuthButton from './AuthButton.js'
import React, { Component } from 'react';

const ThirdPartyAuth = () => {
    return (
      <div className="uSignup__left__oauth">
        <AuthButton
          imgLink="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          serviceName="Google"
        />
        <AuthButton
          imgLink="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Facebook_Home_logo_old.svg/1024px-Facebook_Home_logo_old.svg.png"
          serviceName="FaceBook"
        />
        <AuthButton
          imgLink="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/1259px-Twitter_bird_logo_2012.svg.png"
          serviceName="Twitter"
        />
      </div>
    );
}

export default ThirdPartyAuth;
