import React, { Component } from 'react';
import { connect } from "react-redux";
import { Collapse } from 'react-collapse';

import WriteReview from './components/WriteReview.js';
import HeadSearch from '../components/headSearch.js';
import Review from '../components/Review.js';
import { getGroup } from '../helpers'

class GroupProfile extends Component{
    constructor(props) {
      super(props);
      this.state = {
        group: {},
        isLoading: true,
        comment: "",
        activeReview: false,
        reviews:[
          {
          name: "The Fartz @ 930 Club 09/09/16",
          title: "The Guitarist was amazing",
          details: "Bullshit"
        },
        {
          name: "The Fartz @ 930 Club 09/09/16",
          title: "The Guitarist was amazing",
          details: "Bullshit"
        },
        {
          name: "The Fartz @ 930 Club 09/09/16",
          title: "The Guitarist was amazing",
          details: "Bullshit"
        },
        {
          name: "The Fartz @ 930 Club 09/09/16",
          title: "The Guitarist was amazing",
          details: "Bullshit"
        }
      ]
    }


      this.handleInputChange = this.handleInputChange.bind(this);
      this.writeReview = this.writeReview.bind(this);
    }

    handleInputChange(event){
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name

      this.setState({
        [name]: value
      })

    }



    componentWillMount() {
      const id = this.props.match.params.id;
      getGroup(id).then( ({data}) => {
        this.setState = { group: data, loading: false };
      });
    }

    writeReview(e){
      e.preventDefault();
      if (this.state.activeReview === true){
        this.setState({
          activeReview: false
        })
      }
      else {
        this.setState({
          activeReview: true
        })
      }
    }

    render(){
      const isLoading = this.state.isLoading;
      const group = this.state.group;

      return(
        <div className="groupProfile">
          <HeadSearch />
          <div className="groupProfile__topbody">

            <div className="groupProfile__topbody__left">

              <div className="groupProfile__topbody__left__profblock">
                <div className="groupProfile__topbody__left__profblock__imgdiv">
                  <img className="groupProfile__topbody__left__profblock__imgdiv__pic" src="http://lorempixel.com/250/250" />
                  <img className="groupProfile__topbody__left__profblock__imgdiv__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
                </div>
                <div className="groupProfile__topbody__left__profblock__proftext">
                  <div className="groupProfile__topbody__left__profblock__proftext__header">
                    <h1> {!isLoading && group.name }</h1>
                  </div>
                  <div className="groupProfile__topbody__left__profblock__proftext__members">
                    {!isLoading && group.members.map( (member, index) =>
                      <div key={index} className="groupProfile__topbody__left__profblock__proftext__members__member">
                        <img src="http://lorempixel.com/50/50" />
                        <a href={`/users/${member.user_id}`}> {member.name} : {member.instrument || "spoons"} </a>
                      </div>
                    )}

                  </div>
                </div>
              </div>

            </div>

          <div className="groupProfile__topbody__right">

            <div className="groupProfile__topbody__right__sliders">
              <div id="Header">
                <h1 id="skillheader"> Skills </h1>
              </div>
              <div id="slidSkills">
                  <div className="groupProfile__topbody__right__sliders__sliderItem">
                    <h3> Professionalism </h3>
                    <img className="groupProfile__topbody__right__sliders__sliderItem__slider" src="./img/Fader.png" />
                  </div>
                  <div className="groupProfile__topbody__right__sliders__sliderItem">
                    <h3> Professionalism </h3>
                    <img className="groupProfile__topbody__right__sliders__sliderItem__slider" src="./img/Fader.png" />
                  </div>
                  <div className="groupProfile__topbody__right__sliders__sliderItem">
                    <h3> Professionalism </h3>
                    <img className="groupProfile__topbody__right__sliders__sliderItem__slider" src="./img/Fader.png" />
                  </div>
                  <div className="groupProfile__topbody__right__sliders__sliderItem">
                    <h3> Professionalism </h3>
                    <img className="groupProfile__topbody__right__sliders__sliderItem__slider" src="./img/Fader.png" />
                  </div>
              </div>
            </div>

          </div>

        </div>

        <div className="groupProfile__bottombody">
          <div className="groupProfile__bottombody__botheader">
            <h1> Reviews </h1>
          </div>
          <div className="groupProfile__bottombody__botmain">
            <div className="groupProfile__bottombody__botmain__left">
              <p> test </p>
            </div>

            <div className="groupProfile__bottombody__botmain__right">
              <div className="groupProfile__bottombody__botmain__right__header">
                <h1> Write a review? </h1> <img src="./img/edit.svg" onClick={this.writeReview} />

              </div>
              {this.state.activeReview &&
                <WriteReview />
              }
              {this.state.reviews.map((item, index) => (
                <Review index={index} cName="groupProfile__bottombody__botmain__right__event" name={item.name} title={item.title} details={item.details} />
              ))}
            </div>
          </div>
        </div>
      </div>

      )
    }

  }

export default GroupProfile;
