import React, { Component } from 'react';

import {
  UserReview,
  HeadSearch,
  Spinner,
  ResultsList,
  ImageDisplay } from '../../../components'

import getImageStyle from '../../../../utilities/getImageStyle'
import GroupSummary from './GroupSummary'
import GroupProfileForm from './GroupProfileForm'
import GroupAddMemberForm from './GroupAddMemberForm'

class GroupProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeReview: false,
      addMember: false,
      makeEdit: false,
      data: false,
    };

    this.writeReview = this.writeReview.bind(this);
    this.toggleAddMember = this.toggleAddMember.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
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

  toggleEdit(){
    const newState = { makeEdit: !this.state.makeEdit }
    if (this.state.addMember) {
      this.setState({makeEdit: true, addMember: false})
    } else {
      this.setState(newState);
    }
  }
  toggleAddMember(){
    const newState = { addMember: !this.state.addMember }
    if (this.state.makeEdit) {
      this.setState({makeEdit: false, addMember: true})
    } else {
      this.setState(newState);
    }
  }

  render(){
    if (this.props.isLoading || !this.state.data ) return (<Spinner />);

    if (this.props.error === true) return (<h1> "Error!"</h1>);

    const { group } = this.props;

    return (
      <div className="profile">
        <HeadSearch />
        <div className="profile__topbody">
          <div className="profile__topbody__left">
            <ImageDisplay
              subject={this.props.group}
              type="group"
              profileText={(<div className="profile__topbody__left__profblock__proftext">
                <h1 style={{"fontSize" : 50}}> {group.name} </h1>
                <h4 style={{"fontSize" : 20, maxWidth: 300, maxHeight: 200, overflow: "auto", textAlign: "justify"}}>
                  {group.description}
                </h4>
              </div>)}
            />

            <div className="profile__topbody__left__details">
              <button className="normal-btn" onClick={this.toggleEdit}>
                {(!this.state.makeEdit) ? "Edit Profile" : "Clear" }
              </button>
              <button className="normal-btn" onClick={this.toggleAddMember}>
                {(!this.state.addMember) ? "Add Member" : "Clear" }
              </button>
            </div>

          </div>

          <div className="profile__topbody__right">
            <div style={{ paddingBottom: 20}} className="profile__topbody__right__sliders">

              {this.state.makeEdit && (
                <GroupProfileForm
                  group={group}
                  onSubmit={(values)=>{this.props.updateGroup({...group, ...values}); this.toggleEdit()}}
                />
              )}
              {this.state.addMember && (
                <GroupAddMemberForm
                  group={group}
                  onSubmit={(values)=>{this.props.updateGroup({...group, ...values}); this.toggleAddMember()}}
                />
              )}
              {!(this.state.makeEdit || this.state.addMember) && (
                <div>
                  <div id="Header">
                    <h1 id="skillheader"> Group Summary </h1>
                  </div>
                  <GroupSummary group={group} />
                </div>
              )}
            </div>
          </div>
        </div>
        {group && group.reviews && group.reviews.length > 0 &&
          <UserReview reviews={group.reviews} />
        }
        {group && this.props.isAuth &&
          <div style={{display: "flex", justifyContent: "center"}} className="groupProfile__bottombody__botmain__right__header">
            <h1> Write a Review for {group.name}! </h1> <img src="/img/edit.svg" onClick={() => this.props.showModal('ADD_GROUP_REVIEW')} />
            

          </div>
        }
      </div>
    )
  }
}


export default GroupProfile;
