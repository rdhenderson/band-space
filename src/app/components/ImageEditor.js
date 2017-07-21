import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { connect } from "react-redux";

import {updateUser, updateGroup} from '../helpers/index.js'

class ImageEditor extends Component{
  constructor(props){
    super(props)
    this.state = {
      position: { x: 0.5, y: 0.5 },
      scale: 1,
      rotate: 0,
      img: './img/user.svg'
    }
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
    this.setState({ position: { ...this.state.position, x } })
  }

  handleYPosition = (e) => {
    const y = parseFloat(e.target.value)
    this.setState({ position: { ...this.state.position, y } })
  }

  savePicture = (e) => {
    e.preventDefault()
    if (this.props.type === "user"){
      this.props.user.profile_image = {...this.state};
      updateUser(this.props.user)
    }
    this.props.editChange();
  }

  componentWillMount(){
    if (this.props.user.profile_image){
      this.setState({
        position: this.props.user.profile_image.position,
        scale: this.props.user.profile_image.scale,
        rotate: this.props.user.profile_image.rotate,
        img: this.props.user.profile_image.img
      })
    }
  }

  render () {
    return (
      <div className={this.props.class}>
          <div style={{borderRadius: 60, width:200, height: 200, overflow: "hidden" }}>
          <img
            src={this.state.img}
            style={{
              width: `${200 * this.state.scale}px`,
              height: `${200 * this.state.scale}px`,
              "marginLeft": `${(this.state.position.x * 100) - 50}%`,
              "marginTop": `${(this.state.position.y * 100) - 50}%`,
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
          value={this.state.position.x}
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
          value={this.state.position.y}
        />
        <br />
        Rotate:
        <button onClick={this.rotateLeft}>Left</button>
        <button onClick={this.rotateRight}>Right</button>
        <br />
        <br />
        <button onClick={this.savePicture}> Save Profile Picture </button>
        <br />
      </div>
    )
  }
}

export default ImageEditor;

// export default ImageEditor;
