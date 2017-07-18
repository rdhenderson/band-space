import React, { Component } from 'react';
import ReactDOM from 'react-dom'

// import Map, {GoogleApiWrapper, Marker, InfoWindow} from "google-maps-react"
import GigMap from '../components/Map.js';

import raf from 'raf'
import _ from 'lodash';
import canUseDOM from "can-use-dom";

const geolocation = (
  canUseDOM && navigator.geolocation ?
  navigator.geolocation :
  ({
    getCurrentPosition(success, failure) {
      failure(`Your browser doesn't support geolocation.`);
    },
  })
);

export class Gigs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      center: null,
      content: null,
      radius: 6000,
      isMounted: false,
      address: "",
      type: "",
      minPrice: "",
      distance: "",
      instrument: ""
      }

      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name

    this.setState({
      [name]: value
    })


    }

  componentDidMount() {
    const tick = () => {
      if (this.state.isUnmounted) {
        return;
      }
      this.setState({ radius: Math.max(this.state.radius - 20, 0) });

      if (this.state.radius > 200) {
        raf(tick);
      }
    };
    geolocation.getCurrentPosition((position) => {
      if (this.state.isUnmounted) {
        return;
      }
      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
        content: `Ready to Rock!`,
      });

      raf(tick);
    }, (reason) => {
      if (this.state.isUnmounted) {
        return;
      }
      this.setState({
        center: {
          lat: 60,
          lng: 105,
        },
        content: `Error: The Geolocation service failed (${reason}).`,
      });
    });
  }

  componentWillUnmount() {
    this.state.isUnmounted = true;
  }


  render(props){
    return (
      <div className="gigs">
        <div className="gigs__nav">
          <div className="gigs__nav__iInput">
            <img src="http://lorempixel.com/50/50" />
          </div>
          <div className="gigs__nav__aInput">
            <input
              name="address"
              value={this.state.address}
              placeholder="Address"
              type="text"
              id="address"
              onChange={this.handleInputChange}
             />
           </div>
           <div className="gigs__nav__pInput">
             <input
               name="minPrice"
               value={this.state.minPrice}
               placeholder="$20"
               type="text"
               id="minPrice"
               onChange={this.handleInputChange}
              />
           </div>
           <div className="gigs__nav__dInput">

           </div>
        </div>
        <div className="gigs__body">
          <div className="gigs__body__map">
            <GigMap
              containerElement={
                <div style={{ height: `100%`, width: `100%` }}> </div>
              }
              mapElement={
                <div style={{ height: `100%`, width: `100%` }}> </div>
              }
              center={this.state.center}
              content={this.state.content}
              radius={this.state.radius}
            />
          </div>

          <div className="gigs__body__info">

          </div>
        </div>


      </div>
    )
  }
}

export default Gigs;
