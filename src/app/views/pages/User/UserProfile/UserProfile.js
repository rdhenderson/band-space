import React, { Component } from 'react';

import HeadSearch from '../../Common/HeadSearch.js'
import UserReview from '../../Common/UserReview.js'
import { sampleReviews } from '../../../../utilities/dummyData'
import Spinner from '../../Common/Spinner'
// import AddReview from '..'
// import UProfDiv from './components/UProfDiv.js'

class UserProfile extends Component {
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
    this.props.getUser(userId);
  }


  render(){
    if (this.props.isLoading) return (<Spinner />);

    const reviews = this.props.user.reviews || sampleReviews;
    const user = this.props.user;
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
          {/* {this.state.activeReview &&
            <AddReview
              reviewType='venue_id'
              reviewSub={venue._id}
            />
          } */}
        </div>
        <UserReview reviews={reviews} />

        // this.state.reviews.map((item, index) => (
        // {/* <Review index={index} cName="groupProfile__bottombody__botmain__right__event" name={item.name} title={item.title} details={item.details} /> */}  ))
        }


      </div>
    )
  }
}

export default UserProfile;
