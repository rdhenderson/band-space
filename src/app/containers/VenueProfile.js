import React, { Component } from 'react';
import axios from 'axios'

class VenueProfile extends Component {

  constructor(props) {
    super(props)
    this.state = {
      venue : {}
    }
  }

  // Pull id from route parameters and get that venue from database
  componentWillMount() {
    const id = this.props.match.params.id;
    axios.get(`/api/venues/${id}`)
    .then( venue => {
      console.log('VENUE:', venue);
      this.setState({ venue });
    });
  }

  render() {
    {}
    return (
      <div className="profile">
        <div className="profile__topbody">
          <div className="profile__topbody__left">

            <div className="profile__topbody__left__profblock">
              <div className="profile__topbody__left__profblock__imgdiv">
                <img className="profile__topbody__left__profblock__imgdiv__pic" src="http://lorempixel.com/250/250" />
                <img className="profile__topbody__left__profblock__imgdiv__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
              </div>
              <div className="profile__topbody__left__profblock__proftext">
                <h1> {this.state.venue.name} </h1>
                <h3> Guitarist/Singer </h3>
              </div>
            </div>

            <div className="profile__topbody__left__details">
              <div id="bands">
                <h3> Bands </h3>
                <ul>
                  <li> The Fartz </li>
                  <li> Paid Against the Machine </li>
                  <li> Migos </li>
                </ul>

              </div>
            </div>

          </div>

          <div className="profile__topbody__right">

            <div className="profile__topbody__right__sliders">
              <div id="Header">
                <h1 id="skillheader"> Skills </h1>
              </div>
              <div id="slidSkills">
                <div className="profile__topbody__right__sliders__sliderItem">
                  <h3> Professionalism </h3>
                  <img className="profile__topbody__right__sliders__sliderItem__slider" src="./img/Fader.png" />
                </div>
                <div className="profile__topbody__right__sliders__sliderItem">
                  <h3> Professionalism </h3>
                  <img className="profile__topbody__right__sliders__sliderItem__slider" src="./img/Fader.png" />
                </div>
                <div className="profile__topbody__right__sliders__sliderItem">
                  <h3> Professionalism </h3>
                  <img className="profile__topbody__right__sliders__sliderItem__slider" src="./img/Fader.png" />
                </div>
                <div className="profile__topbody__right__sliders__sliderItem">
                  <h3> Professionalism </h3>
                  <img className="profile__topbody__right__sliders__sliderItem__slider" src="./img/Fader.png" />
                </div>
              </div>
            </div>

          </div>

        </div>

        <div className="profile__bottombody">
          <div className="profile__bottombody__botheader">
            <h1> Reviews </h1>
          </div>
          <div className="profile__bottombody__botmain">
            <div className="profile__bottombody__botmain__left">
              <p> test </p>
            </div>

            <div className="profile__bottombody__botmain__right">
              <div className="profile__bottombody__botmain__right__event">
                <h3> The Fartz @ 930 Club 09/09/16 </h3>
                <p> The Guitarist was amazing </p>
                <img className="profile__bottombody__botmain__right__event__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
              </div>

              <div className="profile__bottombody__botmain__right__event">
                <h3> The Fartz @ 930 Club 09/09/16 </h3>
                <p> The Guitarist was amazing </p>
                <img className="profile__bottombody__botmain__right__event__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
              </div>

              <div className="profile__bottombody__botmain__right__event">
                <h3> The Fartz @ 930 Club 09/09/16 </h3>
                <p> The Guitarist was amazing </p>
                <img className="profile__bottombody__botmain__right__event__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
              </div>

              <div className="profile__bottombody__botmain__right__event">
                <h3> The Fartz @ 930 Club 09/09/16 </h3>
                <p> The Guitarist was amazing </p>
                <img className="profile__bottombody__botmain__right__event__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
              </div>
            </div>
          </div>

        </div>

      </div>
    )

  }
}

export default VenueProfile;
