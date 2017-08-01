import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import {
  AddReview,
  UserReview,
  HeadSearch,
  Spinner,
  ResultsList,
  ImageDisplay } from '../../../components'

import { sampleReviews } from '../../../../utilities/dummyData.js'
import getImageStyle from '../../../../utilities/getImageStyle'
import UserSkills from './UserSkills'
import UserProfileForm from './UserProfileForm.js'

class UserProfile extends Component {
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
    const userId = this.props.match.params.id;
    this.props.fetchUser(userId);
  }

  writeReview(){
    const newState = { activeReview: !this.state.activeReview }
    this.setState(newState);
  }
  render(){
    if (this.props.isLoading || !this.state.data || !this.props.user) return (<Spinner />);

    if (this.props.error === true) return (<h1> "Error!"</h1>);

    const { user } = this.props;

    return (

      <div className="profile">
        <HeadSearch />
        <div className="profile__topbody">
          <div className="profile__topbody__left">
            <ImageDisplay
              type="user"
              subject={this.props.user}
              profileText={
                (<div className="profile__topbody__left__profblock__proftext">
                  <h1 style={{"fontSize" : 50}}> {user.name} </h1>
                  <h3 style={{"fontSize" : 20}}> {user.email} </h3>
                  <h4 style={{"fontSize" : 20, maxWidth: 300, maxHeight: 200, overflow: "auto", textAlign: "justify"}}> {user.description} </h4>
                </div>)
              }
            />

            <div className="profile__topbody__left__details">
              <div id="bands">
                <h3> Groups </h3>
                <ul>
                  {(user && user.groups) ? (
                    user.groups.map( (group, index) =>(
                      <Link key={group._id} to={`/groups/${group._id}`}>
                        <li>#{index+1}: {group.name} </li>
                      </Link>
                    ))
                  ) : (
                    <li> No Groups Added Yet </li>
                  )}

                </ul>
              </div>
              <button className="normal-btn" onClick={this.toggleEdit}>
                {(!this.state.makeEdit) ? "Edit Profile" : "View Summary" }
              </button>

            </div>

          </div>

          <div className="profile__topbody__right">
            <div style={{ paddingBottom: 20}} className="profile__topbody__right__sliders">

              {this.state.makeEdit ? (
                <UserProfileForm
                  user={user}
                  onSubmit={(values)=>{this.props.updateUser({...user, ...values}); this.toggleEdit()}}

                />

              ) : (
                <div>
                  <div id="Header">
                    <h1 id="skillheader"> User Summary </h1>
                  </div>
                  <UserSkills user={user} />
                </div>
              )}
            </div>
          </div>
        </div>


        <UserReview reviews={user.reviews} />
        {user && this.props.isAuth &&
          <div style={{display: "flex", justifyContent: "center"}} className="groupProfile__bottombody__botmain__right__header">
            <h1> Write a Review! for {user.name} </h1> <img src="/img/edit.svg" onClick={() => this.props.showModal('ADD_USER_REVIEW')} />


          </div>
        }
      </div>
    )
  }
}

export default UserProfile;
