import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import axios from 'axios';
import Infinite from 'react-infinite';


class Welcome extends Component {

  constructor(props) {
    super(props)
    this.state = {
      querytype: "",
      query : "",
      venues: [],
      searchType: "venue",
      showDrop: false,
      showDisplay: {
        display:  'none'
      },
      icon: "./img/stage.svg"
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.showDropdown = this.showDropdown.bind(this);
    this.searchSelect = this.searchSelect.bind(this);
  }


  handleInputChange(event){
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name

  this.setState({
    [name]: value
  })


  }

  componentDidMount(){
    axios.get('/api/venues')
    .then(res => {
      this.setState({venues: res.data});
    })
    .catch(err => {
      console.log(err);
    });
  }

  showDropdown(){
    if (this.state.showDrop === false){
      this.setState({
        showDrop: true
      })
    }
    else{
      this.setState({
        showDrop: false
      })
    }

  }

  searchSelect(event) {
    console.log('event', event.target);
    if(event.target === "<a>Artist</a>"){
      console.log("Artist;")
      this.setState({
        searchType: "Artist",
        icon: "./img/microphone.svg"
      })
    }
    else if(event.target === "<a>User</a>"){
      console.log("User;")
      this.setState({
        searchType: "User",
        icon: "./img/profile.svg"
      })
    }
    else if(event.target === "<a>Venue</a>"){
      console.log("Venue;")
      this.setState({
        searchType: "Venue",
        icon: "./img/stage.svg"
      })
    }
  }


  render() {
    return (
      <div>
        <div className="splash">
          {this.state.query.length === 0 &&
            <div className="splash__logo" id="splashlogo">
              <img src="./img/amplifier.svg"/>
              <h1 id="logotemplate"> BandSpace </h1>
            </div>
          }
          <div className="splash__searchbar">
            <div className="splash__searchbar__icondiv">
              <select name="searchType" value={this.state.searchType} onChange={this.handleInputChange}>
                <option value="artist">Artist</option>
                <option value="venue">Venue</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="splash__searchbar__input">
              <input
                name="query"
                value={this.state.query}
                placeholder="Search for a venue or artist!"
                type="text"
                id="query"
                onChange={this.handleInputChange}
               />
           </div>
          </div>

        </div>

        {this.state.query.length !== 0 &&
          <div className="mreview">
          <div className="mreview__header">
            <h2> Reviews in Washington D.C. </h2>
          </div>
          <div className="mreview__body">
          <Infinite className="mreview__body__container" containerHeight={550} width={'100%'} elementHeight={200}>

            {this.state.venues.map((item, index) => (
              <div key={index} className="mreview__body__item" id={item.id}>
                <div className="mreview__body__item__imgdiv">
                  <img className="mreview__body__item__imgdiv__img" src="http://lorempixel.com/100/100" />
                  <h3> {item.name} </h3>
                </div>
                <div className="mreview__body__item__text">
                  <img src="http://lorempixel.com/500/100" />
                  <ul>
                    <li> Very Professional </li>
                    <li> Drinks A Lot </li>
                    <li> Cheap! </li>
                  </ul>
                </div>
              </div>
            ))}
          </Infinite>

          </div>
        </div>}
      </div>

    );
  }
}

//We export our Component using connect so that we can connect our React with our Redux for an awesome app!
export default Welcome
