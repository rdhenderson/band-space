import React, { Component } from 'react';
import axios from "axios";
import {getUser} from '../../helpers/index.js'

// import components
// import ProfileForm from './components/ProfileForm'
// import ThirdPartyAuth from '../common/ThirdPartyAuth'
import helpers from '../../helpers'
import HeadSearch from '../../components/headSearch.js'
import UserReview from './components/userReview.js'
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
    var userId = this.props.match.url.substring(9)
    getUser(userId).then( ({data}) => {
      this.state = {
        displayUser: data
      };
      console.log("Data: ", data);
    });
  }

  // componentWillMount(){
  //   // var userId = this.props.match.url.substring(9)
  //   // getUser(userId).then( ({data}) => {
  //     // this.setState({
  //     //   name: data.name,
  //     //   id: data._id,
  //     //   profile_image: data.profile_image ,
  //     //   bands: data.bands,
  //     //   reviews: data.reviews,
  //     //   tags: data.tags,
  //     //   venues: data.venues
  //     // });
  //     this.setState({ displayUser: data })
  //     console.log("Data: ", data);
  //   });
// }

  render(){
    if (!(this.state && this.state.displayUser))
      return ( <h1> LOADING... </h1> );
      
    const user = this.state.displayUser;
    let imageStyle;
    // if (user.profile_image.scale)
    //   imageStyle =  {
    //     width: `${200 * user.profile_image.scale}px`,
    //     height: `${200 * user.profile_image.scale}px`,
    //     "marginLeft": `${(user.profile_image.position.x * 100) - 50}%`,
    //     "marginTop": `${(user.profile_image.position.y * 100) - 50}%`,
    //     "transform": `rotate(${user.profile_image.rotate}deg)`
    //   };
    var sampleReviews = [{
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

    return (
      <div className="profile">
        <HeadSearch />
        <div className="profile__topbody">
          <div className="profile__topbody__left">
            <div className="profile__topbody__left__profblock">

              <div>
                <div className="profile__topbody__left__profblock__imgdiv">
                  <div style={{borderRadius: 60, width:200, height: 200, overflow: "hidden" }}>
                    <img
                      className="profile__topbody__left__profblock__imgdiv__pic"
                      src={user.profile_image.img}
                      // style={imageCSS}
                    />
                    {/* <img className="profile__topbody__left__profblock__imgdiv__pic" src='./img/user.svg'  /> */}

                  </div>
                  <img className="profile__topbody__left__profblock__imgdiv__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
                </div>
                <div className="profile__topbody__left__profblock__proftext">
                  <h1> {user.name} </h1>
                  <h3> Guitarist/Singer </h3>
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
      </div>
    )
  }
}

export default UserPublicProfile;
