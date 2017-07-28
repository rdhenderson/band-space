import React, { Component } from 'react';

import {
  AddReview,
  UserReview,
  HeadSearch,
  Spinner,
  ResultsList } from '../../../components'

import { sampleReviews } from '../../../../utilities/dummyData.js'
import getImageStyle from '../../../../utilities/getImageStyle'
import GroupSkills from './GroupSkills'

class GroupProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeReview: false,
      data: false,
    };

    this.writeReview = this.writeReview.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps) {
      this.setState({ data: true });
    }
  }

  componentDidMount() {
    const groupId = this.props.match.params.id;
    this.props.getGroup(groupId);
  }

  writeReview(){
    const newState = { activeReview: !this.state.activeReview }
    this.setState(newState);
  }

  render(){
    if (this.props.isLoading || !this.state.data ) return (<Spinner />);

    if (this.props.error === true) return (<h1> "Error!"</h1>);

    const { group } = this.props;
    const reviews = group.reviews ||  sampleReviews;

    return (

      <div className="profile">
        <HeadSearch />
        <div className="profile__topbody">
          <div className="profile__topbody__left">
            <div className="profile__topbody__left__profblock">

              <div>
                <div className="profile__topbody__left__profblock__imgdiv">
                  <div>
                    {(group.profile_image && group.profile_image.img) &&
                      <img className="profile__topbody__left__profblock__imgdiv__pic"
                        src={group.profile_image.img}
                        style={getImageStyle(group.profile_image)}
                      />
                    }
                  </div>
                </div>
                <div className="profile__topbody__left__profblock__proftext">
                  <h1 style={{"fontSize" : 50}}> {group.name} </h1>
                  <h3 style={{"fontSize" : 20}}> Guitarist/Singer </h3>
                </div>
              </div>
              }
            </div>

            <h1>{group.name} </h1>
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

            <GroupSkills />

          </div>
        </div>
        <UserReview reviews={reviews} />

        <div style={{display: "flex", justifyContent: "center"}} className="groupProfile__bottombody__botmain__right__header">
          <h1> Write a review? </h1> <img src="/img/edit.svg" onClick={this.writeReview} />
          {(this.state.activeReview)  &&
            <AddReview
              reviewType='group_id'
              reviewSub={group._id}
              toggleEdit={this.writeReview}
              author={this.props.currentUser}
            />
          }
        </div>
      </div>
    )
  }
}

export default GroupProfile;
