import React, { Component } from 'react';

import ImageEditor from '../../../components/ImageEditor';


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

  render(){

    return(
      <div className="profile__topbody__left__profblock">
        {this.state.editActive ?
          <div>
            <h1>  </h1>
            <ImageEditor class="profile__topbody__left__profblock__imgdiv" type="user" user={this.props.user} editChange={this.editChange.bind(this)} />
            {/* <button onClick={this.editChange}> Edit Profile Picture </button> */}
          </div>
          :
          <div>
            <div className="profile__topbody__left__profblock__imgdiv">
              <div style={{borderRadius: 60, width:200, height: 200, overflow: "hidden" }}>
                {this.props.user ?(
                   <img
                     className="profile__topbody__left__profblock__imgdiv__pic"
                     src={this.props.user.profile_image.img}
                     style={{ width: `${200 * this.props.user.profile_image.scale}px`, height: `${200 * this.props.user.profile_image.scale}px`, "marginLeft": `${(this.props.user.profile_image.position.x * 100) - 50}%`, "marginTop": `${(this.props.user.profile_image.position.y * 100) - 50}%`, "transform": `rotate(${this.props.user.profile_image.rotate}deg)` }}
                     />
                 ):(
                   <img className="profile__topbody__left__profblock__imgdiv__pic" src='./img/user.svg'  />
                )}
              </div>
              {/* <img className="profile__topbody__left__profblock__imgdiv__pic" src='./img/user.svg'  /> */}
              <img className="profile__topbody__left__profblock__imgdiv__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
            </div>
            <div className="profile__topbody__left__profblock__proftext">
              <h1> John Doe </h1>
              <h3> Guitarist/Singer </h3>
            </div>
            <button onClick={this.editChange}> Edit Profile Picture </button>
          </div>
        }
      </div>
    )
  }
}

export default UProfDiv;
