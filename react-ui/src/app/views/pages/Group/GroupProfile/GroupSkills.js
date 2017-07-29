import React from 'react'

const GroupSkills = (props)=> (
  <div className="profile__topbody__right__sliders">
    <div id="Header">
      <h1 id="skillheader"> Skills </h1>
    </div>
    <div id="slidSkills">
      <div className="profile__topbody__right__sliders__sliderItem">
        <h3> Professionalism </h3>
        <h3 style={{'fontSize': 50 }}> {Math.floor(Math.random() * 50)/10} </h3>
        {/* <img className="profile__topbody__right__sliders__sliderItem__slider" src="/img/Fader.png" /> */}
      </div>
      <div className="profile__topbody__right__sliders__sliderItem">
        <h3> Musicality </h3>
        <h3 style={{'fontSize': 50 }}> {Math.floor(Math.random() * 50)/10} </h3>
        {/* <img className="profile__topbody__right__sliders__sliderItem__slider" src="/img/Fader.png" /> */}
      </div>
      <div className="profile__topbody__right__sliders__sliderItem">
        <h3> Showmanship </h3>
        <h3 style={{'fontSize': 50 }}> {Math.floor(Math.random() * 50)/10} </h3>
        {/* <img className="profile__topbody__right__sliders__sliderItem__slider" src="/img/Fader.png" /> */}
      </div>
      <div className="profile__topbody__right__sliders__sliderItem">
        <h3> Value </h3>
        <h3 style={{'fontSize': 50 }}> {Math.floor(Math.random() * 50)/10} </h3>
        {/* <img className="profile__topbody__right__sliders__sliderItem__slider" src="/img/Fader.png" /> */}
      </div>
    </div>
  </div>
);

export default GroupSkills
