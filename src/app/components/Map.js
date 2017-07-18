import React, { Component } from 'react';

import canUseDOM from "can-use-dom";
import raf from "raf";

import { withGoogleMap, GoogleMap, Marker, Circle, InfoWindow } from "react-google-maps";

const GigMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    center={props.center}
  >
    {props.center && (
      <InfoWindow position={props.center}>
        <div>{props.content}</div>
      </InfoWindow>
    )}
    {props.center && (
      <Circle
        center={props.center}
        radius={props.radius}
        options={{
          fillColor: `red`,
          fillOpacity: 0.20,
          strokeColor: `red`,
          strokeOpacity: 1,
          strokeWeight: 1,
        }}
      />
    )}
  </GoogleMap>
 ));


export default GigMap;
