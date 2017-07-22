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
import SimpleForm from './components/SimpleForm'

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
      isAddGroup: false,
    }

    this.handleUserUpdate = this.handleUserUpdate.bind(this);
    this.userAddGroup = this.userAddGroup.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleAddGroup = this.toggleAddGroup.bind(this);
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
  userAddGroup(values) {
    event.preventDefault();
    const user = this.props.user.user
    const newGroup = {
      members: {
        user_id: [user._id],
        name: user.name,
        email: user.email
      }, ...values };
    console.log("New Group", newGroup);
    this.props.addUserGroup(newGroup, user._id)
    .then( (response) => {
      if (!response.error) {
        this.props.addUserGroupSuccess(response.payload);
        this.props.history.push('/profile');
      } else {
        this.props.addUserGroupFailure(response.payload);
      }
      this.toggleAddGroup();
    });
  }

  toggleAddGroup(){
    this.setState({isAddGroup: !this.state.isAddGroup});
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
    let user = this.props.user.user;

    return (
      <div className="profile">
        <HeadSearch />
        <div className="profile__topbody">

          <div className="profile__topbody__left">

            <UProfDiv onSave={this.handleUserUpdate.bind(this)} />

            <div className="profile__topbody__left__details">

              <div id="bands">
                <h3> Your Groups </h3>
                <ul>
                  {user.bands.map( (band, index) =>(
                    <li key={index} onClick={() => this.props.history.push(`/groups/${band._id}`)}>
                      #{index+1}: {band.name}
                    </li>
                  ))}

                </ul>
                <button className="normal-btn" onClick={this.toggleAddGroup}>Add Group</button>
                {this.state.isAddGroup &&
                  <SimpleForm onSubmit={this.userAddGroup}/>
                }
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
                  {/* <img className="profile__topbody__right__sliders__sliderItem__slider" src="./img/Fader.png" /> */}
                </div>
                <div className="profile__topbody__right__sliders__sliderItem">
                  <h3> Musicality </h3>
                  <h3 style={{'fontSize': 50 }}> {Math.floor(Math.random() * 50)/10} </h3>
                  {/* <img className="profile__topbody__right__sliders__sliderItem__slider" src="./img/Fader.png" /> */}
                </div>
                <div className="profile__topbody__right__sliders__sliderItem">
                  <h3> Showmanship </h3>
                  <h3 style={{'fontSize': 50 }}> {Math.floor(Math.random() * 50)/10} </h3>
                  {/* <img className="profile__topbody__right__sliders__sliderItem__slider" src="./img/Fader.png" /> */}
                </div>
                <div className="profile__topbody__right__sliders__sliderItem">
                  <h3> Value </h3>
                  <h3 style={{'fontSize': 50 }}> {Math.floor(Math.random() * 50)/10} </h3>
                  {/* <img className="profile__topbody__right__sliders__sliderItem__slider" src="./img/Fader.png" /> */}
                </div>
              </div>
            </div>

          </div>

        </div>
        <UserReview reviews={sampleReviews} />

        <button className="normal-btn" onClick={this.toggleEdit}>Edit Profile</button>
        {this.state.makeEdit && (
          <ProfileForm user={user} onSubmit={this.handleUserUpdate}/>
        )}
        {/* <button className="normal-btn" onClick={this.toggleConnect}>Connect Services</button>
        {this.state.showConnect && (
          <ThirdPartyAuth connect={true} />
        )} */}
      </div>

    )
  }
}

export default UserPrivateProfile
