import React, { Component } from 'react';

import {
  AddReview,
  UserReview,
  HeadSearch,
  Spinner,
  ResultsList,
  ImageDisplay } from '../../../components'

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
    this.handleGroupUpdate = this.handleGroupUpdate.bind(this);
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

  handleGroupUpdate(update) {

  }
  writeReview(){
    const newState = { activeReview: !this.state.activeReview }
    this.setState(newState);
  }

  render(){
    if (this.props.isLoading || !this.state.data ) return (<Spinner />);

    if (this.props.error === true) return (<h1> "Error!"</h1>);

    const { group } = this.props;
    const reviews = (group && group.reviews) ? group.reviews : sampleReviews;

    return (

      <div className="profile">
        <HeadSearch />
        <div className="profile__topbody">
          <div className="profile__topbody__left">
            <div className="profile__topbody__left__profblock">

              <div>
                <div className="profile__topbody__left__profblock__imgdiv">
                  <div>
                    <ImageDisplay
                      subject={this.props.group}
                      type="group"
                    />

                  </div>
                </div>
                {group &&
                  <div className="profile__topbody__left__profblock__proftext">
                    <h1 style={{"fontSize" : 50}}> {group.name} </h1>
                    <h3 style={{"fontSize" : 20}}> {group.description} </h3>
                  </div>
                }
              </div>
              }
            </div>
            {group &&
              <h1>{group.name} </h1>
            }
            <div className="profile__topbody__left__details">
              {group && group.members !== undefined && (
                <div>
                  <h3> Group Members </h3>
                  <ul>
                    {group.members.map( (member, index) =>
                      <li key={member._id || index}> #{index} - {member.name} </li>
                    )}
                  </ul>
                </div>
              )}
            </div>

          </div>

          <div className="profile__topbody__right">

            <GroupSkills />

          </div>
        </div>
        <UserReview reviews={reviews} />

        <div style={{display: "flex", justifyContent: "center"}} className="groupProfile__bottombody__botmain__right__header">
          <h1> Write a review? </h1> <img src="/img/edit.svg" onClick={this.writeReview} />
          {(this.state.activeReview)  && group &&
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
