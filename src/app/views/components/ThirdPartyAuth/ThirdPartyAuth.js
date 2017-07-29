import AuthButton from './AuthButton.js'
import React, { Component } from 'react';
import axios from 'axios'

const ThirdPartyAuth = (props) => {

  const onClick = (service) => {
    return function() {
      const url_base = (props.connect) ? 'auth/connect' : 'auth'
      axios.get(`/${url_base}/${service}`)
      .then( (results) => console.log('Results', results))
    }
  }
    return (
      <div className="uSignup__left__oauth">
        <AuthButton
          imgLink="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          serviceName="Google"
          onClick={onClick('google')}
        />
        <AuthButton
          imgLink="https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Facebook_Home_logo_old.svg/1024px-Facebook_Home_logo_old.svg.png"
          serviceName="FaceBook"
          onClick={onClick('facebook')}
        />
        <AuthButton
          imgLink="https://upload.wikimedia.org/wikipedia/commons/b/bc/Antu_spotify.svg"
          serviceName="Spotify"
          onClick={onClick('spotify')}
        />
        <AuthButton
          imgLink="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Twitter_bird_logo_2012.svg/1259px-Twitter_bird_logo_2012.svg.png"
          serviceName="Twitter"
          onClick={onClick('twitter')}

        />
      </div>
    );
}

export default ThirdPartyAuth;
