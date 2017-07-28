import React, { Component } from 'react';
import { connect } from "react-redux";
import { Collapse } from 'react-collapse';

const VenueItem = ({ venue, handleClick }) => (
   <div className="mreview__body__item" onClick={handleClick}>
     <div className="mreview__body__item__imgdiv">
       <img className="mreview__body__item__imgdiv__img" src={venue.imgSrc} />
       <h1> {venue.name} </h1>
       <h3>{`${venue.address.street} ${venue.address.city}, ${venue.address.state}`} </h3>
       <div className="mreview__body__item__text">
         <img src={venue.images && venue.images.length > 0 && venue.images[0]} />
         <p> {venue.description} </p>
         <ul>
           {venue.staff.map( (staff, index) => (
             <li key={index}> {staff.name} - {staff.role} </li>
           ))}
         </ul>
       </div>
     </div>
   </div>
 );

export default VenueItem;
