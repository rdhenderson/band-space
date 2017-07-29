import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import components
import ProfileForm from './components/ProfileForm'
import SimpleForm from './components/SimpleForm'

import {
  ThirdPartyAuth,
  ImageDisplay,
  Spinner,
  HeadSearch,
  UserReview, } from '../../components'

import { sampleReviews } from '../../../utilities/dummyData'

class PrivateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      makeEdit : false,
      showConnect: false,
      isAddGroup: false,
      redirect: false,
    }

    this.handleUserUpdate = this.handleUserUpdate.bind(this);
    this.userAddGroup = this.userAddGroup.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleAddGroup = this.toggleAddGroup.bind(this);
    this.toggleConnect = this.toggleConnect.bind(this);
  }

  handleUserUpdate(updates) {
    // event.preventDefault();
    this.props.updateUser(updates, this.props.user._id);
    this.setState({redirect: true});
  }

  userAddGroup(values) {
    // event.preventDefault();
    const user = this.props.user
    const newGroup = {
      members: {
        user_id: [user._id],
        name: user.name,
        email: user.email
      }, ...values };
    console.log("New Group", newGroup);
    this.props.addUserGroup(newGroup, user._id);
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
    if (this.props.isLoading) return (<Spinner />);

    let user = this.props.user;
    console.log("User", user);
    return (
      <div className="profile">
        <HeadSearch />
        <div className="profile__topbody">
          <div className="profile__topbody__left">

            <ImageDisplay onSave={this.handleUserUpdate.bind(this)} />

            <div className="profile__topbody__left__details">

              <div id="bands">
                <h3> Your Groups </h3>
                <ul>
                  {user.groups && user.groups.map( (group, index) =>(
                    <Link key={group.id} to={`/groups/${group._id}`}>
                      <li>#{index+1}: {group.name} </li>
                    </Link>
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

export default PrivateProfile
