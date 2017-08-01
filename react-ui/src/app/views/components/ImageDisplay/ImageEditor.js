import React, { Component } from 'react';
import ErrorMessage from '../ErrorMessage'
// import {updateUser, updateGroup} from '../helpers/index.js'
import { connect } from "react-redux";

class ImageEditor extends Component{
  constructor(props){
    super(props)
    this.state = {
      xpos: 0.5,
      ypos: 0.5,
      scale: 1,
      rotate: 0,
      img: '/img/user.svg'
    }
    this.savePicture = this.savePicture.bind(this);
  }

  handleNewImage = (e) => {
    console.log(e.target.value);
    this.setState({ img: e.target.value })
  };

  handleScale = (e) => {
    const scale = parseFloat(e.target.value)
    this.setState({ scale })
  }

  rotateLeft = (e) => {
    e.preventDefault()

    this.setState({
      rotate: this.state.rotate - 90
    })
  }

  rotateRight = (e) => {
    e.preventDefault()
    this.setState({
      rotate: this.state.rotate + 90
    })
  }

  handleXPosition = (e) => {
    const x = parseFloat(e.target.value)
    this.setState({ xpos: x })
  }

  handleYPosition = (e) => {
    const y = parseFloat(e.target.value)
    this.setState({ ypos: y })
  }

  savePicture = (e) => {
    const profile_image = {
      img: this.state.img,
      scale: this.state.scale,
      rotate: this.state.rotate,
      xpos: this.state.xpos,
      ypos: this.state.ypos,
    };
      // Send entire object back, with updated profile_image field
    this.props.onSave({...this.props.subject, profile_image });
    this.props.toggleEdit();
  }

  componentWillMount(){
    if (this.props.subject.profile_image){
      const { scale, rotate, img, xpos, ypos } = this.props.subject.profile_image;
      let newState = {
        scale, rotate, img, xpos, ypos,
      };

      this.setState(newState);
    }
  }

  render () {
    return (
      <div className={this.props.class}>
        <div style={{borderRadius: 60, width:200, height: 200, overflow: "hidden" }}>
          <img
            alt="Profile"
            src={this.state.img}
            style={{
              width: `${200 * this.state.scale}px`,
              height: `${200 * this.state.scale}px`,
              "marginLeft": `${(this.state.xpos * 100) - 50}%`,
              "marginTop": `${(this.state.ypos * 100) - 50}%`,
              "transform": `rotate(${this.state.rotate}deg)`
            }}
          />
        </div>
        <br />
        Copy and Paste Image URL:
        <input
          name='newImage'
          type='text'
          onChange={this.handleNewImage}
        />
        <br />
        Zoom:
        <input
          name='scale'
          type='range'
          onChange={this.handleScale}
          min='1'
          max='2'
          step='0.01'
          defaultValue='1'
        />
        <br />
        X Position:
        <input
          name='scale'
          type='range'
          onChange={this.handleXPosition}
          min='0'
          max='1'
          step='0.01'
          value={this.state.xpos}
        />
        <br />
        Y Position:
        <input
          name='scale'
          type='range'
          onChange={this.handleYPosition}
          min='0'
          max='1'
          step='0.01'
          value={this.state.ypos}
        />
        <div className="profile__topbody__left__profblock__imgdiv__buttons">
          Rotate:
          <button className="normal-btn" onClick={this.rotateLeft}>Left</button>
          <button className="normal-btn" onClick={this.rotateRight}>Right</button>
          <button className="normal-btn" onClick={this.savePicture}> Save Profile Picture </button>
        </div>
      </div>
    )
  }
}

export default connect((state) => state)(ImageEditor);
