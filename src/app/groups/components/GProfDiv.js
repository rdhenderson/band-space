import React, { Component } from 'react';

import ImageEditor from '../../../components/ImageEditor';


class GProfDiv extends Component {

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
      <div className="groupProfile__topbody__left__profblock">
        {this.state.editActive ?
          <div>
            <ImageEditor class="groupProfile__topbody__left__profblock__imgdiv" type="user" user={this.props.user} editChange={this.editChange.bind(this)} />
          </div>
          :
          <div>
            <div className="groupProfile__topbody__left__profblock__imgdiv">
              <div style={{borderRadius: 60, width:200, height: 200, overflow: "hidden" }}>
              
                  <img
                    className="groupProfile__topbody__left__profblock__imgdiv__pic"
                    src="http://lorempixel.com/250/250" />
              <img className="groupProfile__topbody__left__profblock__imgdiv__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
            </div>
          </div>
        }
            <div className="groupProfile__topbody__left__profblock__proftext">
              <div className="groupProfile__topbody__left__profblock__proftext__header">
                <h1> The Fartz </h1>
              </div>
              <div className="groupProfile__topbody__left__profblock__proftext__members">
                  <div className="groupProfile__topbody__left__profblock__proftext__members__member">
                    <img src="http://lorempixel.com/50/50" />
                    <a href="#"> John Doe: Guitar </a>
                  </div>
                  <div className="groupProfile__topbody__left__profblock__proftext__members__member">
                    <img src="http://lorempixel.com/50/50" />
                    <a href="#"> John Doe: Guitar </a>
                  </div>
                  <div className="groupProfile__topbody__left__profblock__proftext__members__member">
                    <img src="http://lorempixel.com/50/50" />
                    <a href="#"> John Doe: Guitar </a>
                  </div>
                  <div className="groupProfile__topbody__left__profblock__proftext__members__member">
                    <img src="http://lorempixel.com/50/50" />
                    <a href="#"> John Doe: Guitar </a>
                  </div>

              </div>
            </div>

      </div>
    )
  }
