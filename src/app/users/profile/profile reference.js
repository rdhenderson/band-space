import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HeadSearch from '../components/headSearch.js';
import { Item, ItemContainer } from './Item';
import UProfDiv from '../components/UProfDiv';

const sampleReviews = [{
    title : "The Reusable Code @ 930 Club 09/06/17",
    description: "The Guitarist was amazing",
    image: "http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png",
  },
  {
    title : "The Who Needs Sleep @ 930 Club 07/19/17",
    description: "Well, you're never gonna get it",
    image: "http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png",
  },
  {
    title : "The Fartz @ 930 Club 09/09/16",
    description: "The Guitarist was amazing",
    image: "http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png",
  }];


class Profile extends Component {

      constructor(props) {
        super(props)
        this.state = {
          query: "",
          uName: "",
          skill: {},
          bands: {},
          events: {}
        }
      }

      render() {
        return (
          <div className="profile">
            <HeadSearch />
            <div className="profile__topbody">

              <div className="profile__topbody__left">

                <UProfDiv />
                {/* <div className="profile__topbody__left__profblock">
                  <div className="profile__topbody__left__profblock__imgdiv">
                    <img className="profile__topbody__left__profblock__imgdiv__pic" src="http://lorempixel.com/250/250" />
                    <img className="profile__topbody__left__profblock__imgdiv__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
                  </div>
                  <div className="profile__topbody__left__profblock__proftext">
                    <h1> John Doe </h1>
                    <h3> Guitarist/Singer </h3>
                  </div>
                </div> */}

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
            <ItemContainer
              reviews={sampleReviews}
            />
          </div>
        )

      }
    }

    export default Profile;
