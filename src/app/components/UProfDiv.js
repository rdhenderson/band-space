import React, { Component } from 'react';

import ImageEditor from './ImageEditor';


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
            <ImageEditor class="profile__topbody__left__profblock__imgdiv" />
            <button onClick={this.editChange}> Edit Profile Picture </button>
          </div>
          :
          <div>
            <div className="profile__topbody__left__profblock__imgdiv">
              <img className="profile__topbody__left__profblock__imgdiv__pic" src="http://lorempixel.com/250/250" />
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
