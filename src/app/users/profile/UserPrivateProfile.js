import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from '../../helpers/index.js'

// import components
import ProfileForm from './components/ProfileForm'
import ThirdPartyAuth from '../common/ThirdPartyAuth'
import helpers from '../../helpers'
import HeadSearch from '../../components/headSearch.js'
import UserReview from './components/userReview.js'
import UProfDiv from './components/UProfDiv.js'

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

class UserPrivateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makeEdit : false,
      showConnect: false,
    }

    this.handleUserUpdate = this.handleUserUpdate.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleConnect = this.toggleConnect.bind(this);
  }

  handleUserUpdate(updates) {
    event.preventDefault();

    this.props.updateUser(updates, this.props.user.user._id)
    .then( (response) => {
      if (!response.error) {
        this.props.updateUserSuccess(response.payload);
        this.toggleEdit();
      } else {
        this.props.updateUserFailure(response.payload);
      }
    });
  }

  toggleEdit(){
    const newState = { makeEdit: !this.state.makeEdit }
    this.setState(newState);
  }

  toggleConnect(){
    const newState = { showConnect: !this.state.showConnect }
    this.setState(newState);
  }

  // componentWillMount(){
  //   var userId = this.props.match.params.id;
  //   getUser(userId).then(pageUser => {
  //     this.setState({
  //       name: pageUser.data.name,
  //       id: pageUser.data._id,
  //       profile_image: pageUser.data.profile_image,
  //       bands: pageUser.data.bands,
  //       reviews: pageUser.data.reviews,
  //       tags: pageUser.data.tags,
  //       venues: pageUser.data.venues
  //     });
  //   });
  // }


  render(){
    let user = this.props.user;

    return (
      <div className="profile">
        <HeadSearch />
        <div className="profile__topbody">

          <div className="profile__topbody__left">

            <UProfDiv onSave={this.handleUserUpdate.bind(this)} />

            <h1>{user.email} </h1>
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
        <UserReview reviews={sampleReviews} />

        <button onClick={this.toggleEdit}>Edit Profile</button>
        {this.state.makeEdit && (
          <ProfileForm user={user} onSubmit={this.handleUserUpdate}/>
        )}
        <button onClick={this.toggleConnect}>Connect Services</button>
        {this.state.showConnect && (
          <ThirdPartyAuth connect={true} />
        )}
      </div>

    )
  }
}

export default UserPrivateProfile
