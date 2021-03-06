import React, { Component } from 'react';
import axios from 'axios'
import VenueSummary from './VenueSummary'
import VenueProfileEditArrays from './VenueProfileEditArrays'
import WriteReview from '../groups/components/writeReview.js'

import HeadSearch from '../pages/Common/HeadSearch.js'

import UserReview from '../users/profile/components/UserReview.js'

class VenueProfile extends Component {

  constructor(props) {
    super(props)

    this.state = {
      venue: {},
      makeEdit : false,
      showConnect: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.writeReview = this.writeReview.bind(this);
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

  handleSubmit(values) {
    event.preventDefault();
    console.log("Edited Profile", values);
    // axios.post('/api/users/profile', {
    //   email: values.email,
    //   password: values.password,
    // })
    // .then( ({ data }) => {
    //   // this.props.history.push('/profile');
    // }).catch(err => console.log(err));
  }

  toggleEdit(){
    const newState = { makeEdit: !this.state.makeEdit }
    this.setState(newState);
  }

  toggleConnect(){
    const newState = { showConnect: !this.state.showConnect }
    this.setState(newState);
  }

  writeReview(e){
    e.preventDefault();
    if (this.state.activeReview === true){
      this.setState({
        activeReview: false
      })
    }
    else {
      this.setState({
        activeReview: true
      })
    }
  }

  render() {
    const venue = this.state.venue;
    const review = this.state.venue.reviews;

    return (
      <div className="profile">
        <HeadSearch />
        <div className="profile__topbody">
          <div className="profile__topbody__left">
            <div className="profile__topbody__left__profblock">
              <div className="profile__topbody__left__profblock__imgdiv">
                <img className="profile__topbody__left__profblock__imgdiv__pic" src="http://lorempixel.com/250/250" />
                {/* <img className="profile__topbody__left__profblock__imgdiv__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
                </div> */}
                <div className="profile__topbody__left__profblock__proftext">
                  <h1 style={{"fontSize" : 50}}> {venue.name} </h1>
                  <h3 style={{"fontSize" : 20}}> {venue.address} </h3>
                  <h4 style={{"fontSize" : 20}}> {venue.description} </h4>
                </div>
              </div>

              <div className="profile__topbody__left__details">
                <h3> Events </h3>
                <ul>
                  <li> List Venue Events </li>
                </ul>
              </div>

            </div>

          </div>

          <div className="profile__topbody__right">
            <div style={{ paddingBottom: 20}} className="profile__topbody__right__sliders">
              <button onClick={this.toggleEdit}>
                {(!this.state.makeEdit) ? "Edit Profile" : "View Summary" }
              </button>
              {this.state.makeEdit ? (
                <VenueProfileEditArrays
                  onSubmit={this.handleSubmit}
                  // initialValues={venue}
                  fieldClass="profile__topbody__right"
                  venue={venue}
                />
              ) : (
                <div>
                  <div id="Header">
                    <h1 id="skillheader"> Venue Summary </h1>
                  </div>
                  <VenueSummary venue={venue} />
                </div>
              )}
            </div>
          </div>

        </div>




        {(this.state.review !== undefined) ? (
          <UserReview reviews={this.state.reviews} />
        ):(
          <UserReview reviews={sampleReviews} />
        )
          // this.state.reviews.map((item, index) => (
          // {/* <Review index={index} cName="groupProfile__bottombody__botmain__right__event" name={item.name} title={item.title} details={item.details} /> */}  ))
        }
        <div style={{display: "flex", justifyContent: "center"}} className="groupProfile__bottombody__botmain__right__header">
          <h1> Write a review? </h1> <img src="/img/edit.svg" onClick={this.writeReview} />
          {(this.state.activeReview)  &&
            <WriteReview
              reviewType='venue_id'
              reviewSub={venue._id}
              toggleEdit={this.writeReview}
            />
          }

        </div>
      </div>

    )

  }
}

export default VenueProfile;
