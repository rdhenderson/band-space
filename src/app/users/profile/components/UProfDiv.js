import React, { Component } from 'react';
import { connect } from "react-redux";
import ImageEditor from '../../../components/ImageEditor';

import {getUser} from '../../../helpers/index.js'


class UProfDiv extends Component {

  constructor(props){
    super(props)
    this.state = {
      editActive: false

    }
    this.editChange = this.editChange.bind(this)
  }

  editChange(){
    this.setState({editActive: !this.state.editActive });

  }

  render(){
    const user = this.props.user;
    console.log(this.props);

      return (
        <div className="profile__topbody__left__profblock">
          {(this.state.editActive) ? (
            <ImageEditor class="profile__topbody__left__profblock__imgdiv" type="user" user={this.props.user} editChange={this.editChange.bind(this)} />
          ):(
            <div>
              <div className="profile__topbody__left__profblock__imgdiv">
                <img className="profile__topbody__left__profblock__imgdiv__pic"
                  src={user.profile_image.img}
                  style={JSON.parse(user.profile_image.imageStyle)}
                />
                <img className="profile__topbody__left__profblock__imgdiv__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
              </div>
              <div className="profile__topbody__left__profblock__proftext">
                <h1> </h1>
                <h3> Guitarist/Singer </h3>
              </div>
              <button onClick={this.editChange}> Edit Profile Picture </button>
            </div>
          )}
        </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    isAuth: state.user.isAuth,
    user: state.user.user,
    // id: state.user.user
  };
}

function mapDispatchToProps(dispatch){
  // return bindActionCreators({ loginUser }, dispatch);
}

export default connect(mapStateToProps)(UProfDiv);

// export default ProfilePage;
