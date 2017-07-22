import React, { Component } from 'react';
import axios from "axios";
import {getUser} from '../../helpers/index.js'

// import components
// import ProfileForm from './components/ProfileForm'
// import ThirdPartyAuth from '../common/ThirdPartyAuth'
import helpers from '../../helpers'
import HeadSearch from '../../components/headSearch.js'
import UserReview from './components/UserReview.js'
// import UProfDiv from './components/UProfDiv.js'

const sampleReviews = [{
    event : "The Reusable Code @ 930 Club 09/06/17",
    title: "The Guitarist was amazing",
    body: "This is the descrption",
    image: "http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png",
  },
  {
    event : "The Who Needs Sleep @ 930 Club 07/19/17",
    title: "Well, you're never gonna get it",
    body: "This is the descrption",
    image: "http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png",
  },
  {
    event : "The Fartz @ 930 Club 09/09/16",
    title: "The Guitarist was amazing",
    body: "This is the descrption",
    image: "http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png",
  }];

class UserPublicProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      id: '',
      profile_image: {} ,
      bands: [],
      reviews: [],
      tags: [],
      venues: [],
      displayUser: {},
    };
  }

  componentWillMount() {
    const userId = this.props.match.params.id;
    getUser(userId).then( ({data}) => {
      this.setState = { ...data, displayUser: data };
      console.log("Data: ", data);
    });
  }


  render(){
    const user = this.state.displayUser || {};
    let imageStyle;

    return (
      <div className="profile">
        <HeadSearch />
        <div className="profile__topbody">
          <div className="profile__topbody__left">
            <div className="profile__topbody__left__profblock">

              <div>
                <div className="profile__topbody__left__profblock__imgdiv">
                  {/* <div style={{borderRadius: 60, width:200, height: 200, overflow: "hidden" }}> */}
                  <div>
                    {(user.profile_image && user.profile_image.img) ? (
                      <img className="profile__topbody__left__profblock__imgdiv__pic"
                        src={user.profile_image.img}
                        style={JSON.parse(user.profile_image.imageStyle)}
                      />
                    ):(
                      <img className="profile__topbody__left__profblock__imgdiv__pic" src='/img/user.svg'/>
                    )}
                  </div>
                  {/* <img className="profile__topbody__left__profblock__imgdiv__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" /> */}
                </div>
                <div className="profile__topbody__left__profblock__proftext">
                  <h1 style={{"fontSize" : 50}}> {user.name} </h1>
                  <h3 style={{"fontSize" : 20}}> Guitarist/Singer </h3>
                </div>
              </div>
              }
            </div>

            <h1>{user.name} </h1>
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
                  <h3 style={{'fontSize': 50 }}> {Math.floor(Math.random() * 50)/10} </h3>
                  {/* <img className="profile__topbody__right__sliders__sliderItem__slider" src="/img/Fader.png" /> */}
                </div>
                <div className="profile__topbody__right__sliders__sliderItem">
                  <h3> Musicality </h3>
                  <h3 style={{'fontSize': 50 }}> {Math.floor(Math.random() * 50)/10} </h3>
                  {/* <img className="profile__topbody__right__sliders__sliderItem__slider" src="/img/Fader.png" /> */}
                </div>
                <div className="profile__topbody__right__sliders__sliderItem">
                  <h3> Showmanship </h3>
                  <h3 style={{'fontSize': 50 }}> {Math.floor(Math.random() * 50)/10} </h3>
                  {/* <img className="profile__topbody__right__sliders__sliderItem__slider" src="/img/Fader.png" /> */}
                </div>
                <div className="profile__topbody__right__sliders__sliderItem">
                  <h3> Value </h3>
                  <h3 style={{'fontSize': 50 }}> {Math.floor(Math.random() * 50)/10} </h3>
                  {/* <img className="profile__topbody__right__sliders__sliderItem__slider" src="/img/Fader.png" /> */}
                </div>
              </div>
            </div>

          </div>

        </div>
        <UserReview reviews={sampleReviews} />
      </div>
    )
  }
}

export default UserPublicProfile;
