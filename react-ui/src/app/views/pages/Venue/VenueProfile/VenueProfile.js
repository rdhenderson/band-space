import React, { Component } from 'react';

import VenueSummary from './VenueSummary'
import VenueProfileEditArrays from './VenueProfileEditArrays'
import { Spinner, AddReview, HeadSearch, UserReview } from '../../../components'

import { sampleReviews } from '../../../../utilities/dummyData.js'

class VenueProfile extends Component {

  constructor(props) {
    super(props)

    this.state = {
      makeEdit : false,
      showConnect: false,
      data: false,
    };

    this.toggleEdit = this.toggleEdit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps) {
          this.setState({
              data: true
          });
      }
  }
  // Pull id from route parameters and get that venue from database
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getVenue(id);
  }

  toggleEdit(){
    const newState = { makeEdit: !this.state.makeEdit }
    this.setState(newState);
  }

  render() {
    if (this.props.isLoading || !this.state.data ) return (<Spinner />);

    if (this.props.error === true) return (<h1> "Error!"</h1>);

    const venue = this.props.venue;
    const reviews = sampleReviews;

    return (
      <div className="profile">
        <HeadSearch />
        <div className="profile__topbody">
          <div className="profile__topbody__left">
            <div className="profile__topbody__left__profblock">
              <div className="profile__topbody__left__profblock__imgdiv">
                <img className="profile__topbody__left__profblock__imgdiv__pic"
                  src="http://lorempixel.com/250/250"
                />
                <div className="profile__topbody__left__profblock__proftext">
                  <h1 style={{"fontSize" : 50}}> {venue.name} </h1>
                  <h3 style={{"fontSize" : 20}}> {venue.address.street} </h3>
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
              {/* <button onClick={this.toggleEdit}>
                {(!this.state.makeEdit) ? "Edit Profile" : "View Summary" }
              </button> */}
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

        <UserReview reviews={reviews} />

        <div style={{display: "flex", justifyContent: "center"}} className="groupProfile__bottombody__botmain__right__header">
          {/* <h1> Write a review? </h1> <img src="/img/edit.svg" onClick={() => this.props.showVenueReviewModal()} /> */}
          <h1> Write a Review! for {venue.name} </h1> <img src="/img/edit.svg" onClick={() => this.props.showModal('TEST_FORM')} />
          {/* <h1> Add Event </h1> <img src="/img/edit.svg" onClick={() => this.props.showModal('ADD_EVENT')} /> */}
          {/* <h1> Validation Form </h1> <img src="/img/edit.svg" onClick={() => this.props.showModal('VALIDATION_FORM')} /> */}
          {/* <h1> Add Event Review </h1> <img src="/img/edit.svg" onClick={() => this.props.showModal('ADD_EVENT_REVIEW')} /> */}

        </div>
      </div>
    )
  }
}


export default VenueProfile;
