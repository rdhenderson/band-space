import React, { Component } from 'react';
import { connect } from "react-redux";
import { Collapse } from 'react-collapse';

const VenueItem = ({venue, index}) => (
   <div key={index} className="mreview__body__item">
     <div className="mreview__body__item__imgdiv">
       <img className="mreview__body__item__imgdiv__img" src={venue.imgSrc} />
       <h1> {venue.name} </h1>
       <h3>{venue.address} </h3>
       <div className="mreview__body__item__text">
         <img src={venue.imgSrc} />
         <p> {venue.description} </p>
       </div>
     </div>
   </div>
 );

export default VenueItem;
