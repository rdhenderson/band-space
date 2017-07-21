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
    if (this.state.editActive === true){
      this.setState({
        editActive: false
      })
    }
    else{
      this.setState({
        editActive: true
      })
    }
  }

  componentWillMount(){
    // console.log(this.props);

  }

  render(){
    // let test = null;
    // if (this.props.user.user._id === this.state.id)
    //   test = <h1> Yes </h1>
    // else {
    //   test = <h1> No </h1>
    // }

    return(
      <div className="profile__topbody__left__profblock">
        {this.state.editActive ?

          <div>
            <h1>  </h1>
            <ImageEditor class="profile__topbody__left__profblock__imgdiv" type="user" user={this.props.user} editChange={this.editChange.bind(this)} />
          </div>

        :

          <div>
            <div className="profile__topbody__left__profblock__imgdiv">
              <div style={{borderRadius: 60, width:200, height: 200, overflow: "hidden" }}>

                {/* {this.props.user ?

                   <img
                  className="profile__topbody__left__profblock__imgdiv__pic"
                  src={this.props.user.profile_image.img}
                  style={{
                  width: `${200 * this.props.user.profile_image.scale}px`,
                  height: `${200 * this.props.user.profile_image.scale}px`,
                  "marginLeft": `${(this.props.user.profile_image.position.x * 100) - 50}%`,
                  "marginTop": `${(this.props.user.profile_image.position.y * 100) - 50}%`,
                  "transform": `rotate(${this.props.user.profile_image.rotate}deg)` }}
                  />

                  :

                   <img className="profile__topbody__left__profblock__imgdiv__pic" src='./img/user.svg'  />

                } */}

              </div>
              <img className="profile__topbody__left__profblock__imgdiv__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
            </div>
            <div className="profile__topbody__left__profblock__proftext">
              <h1> </h1>
              <h3> Guitarist/Singer </h3>
            </div>
            <button onClick={this.editChange}> Edit Profile Picture </button>
          </div>
        }
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
