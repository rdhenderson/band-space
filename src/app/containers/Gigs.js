import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import Map, {GoogleApiWrapper, Marker, InfoWindow} from "google-maps-react"


export class Gigs extends Component {
  render(){
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>


      <Map google={window.google}>
        <Marker onClick={this.onMarkerClick}
        name={'Current location'} />

        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      <h1> Test </h1>
    </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD3L87VZpFMnVmsi559QWjUBDbGAZgPwvE"
})(Gigs)
