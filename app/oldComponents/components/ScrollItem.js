import React, { Compontent } from 'react'

export const VenueScrollItem = (props) => (
  <div className="mreview__body__item"
    onClick={()=> props.history.push(`/venues/${props.venue._id}`)}>
    <div className="mreview__body__item__imgdiv">
      <img className="mreview__body__item__imgdiv__img"
        src={(props.venue.image && props.venue.image.length > 0) ?
        props.venue.image[0] : "http://lorempixel.com/100/100"}
      />
      <h3> {props.venue.name} </h3>

    </div>
    <div className="mreview__body__item__text">
      <p>{props.venue.description}</p>
      {/* <img src="http://lorempixel.com/500/100" /> */}
      <ul>
        {props.venue.staff.map( (staff, index) => (
          <li key={index}> {staff.name}: {staff.role} </li>
        ))}
      </ul>
    </div>
  </div>
);

export const UserScrollItem = (props) => (
  <div className="mreview__body__item" onClick={ ()=> props.history.push(`/users/${props.user._id}`)}>
    <div className="mreview__body__item__imgdiv">
      <img className="mreview__body__item__imgdiv__img" src={props.user.profile_image.img} style={props.user.profile_image.imageStyle}/>
      <h3> {props.user.name} </h3>

    </div>
    <div className="mreview__body__item__text">
      <p>{props.user.description}</p>
      {/* <img src="http://lorempixel.com/500/100" /> */}
      <ul>
        {props.user.bands && props.user.bands.map( (band, index) => (
          <li key={index}> Group#{index}: {band.name} </li>
        ))}
      </ul>
    </div>
  </div>
);

export const GroupScrollItem = (props) => (
  <div className="mreview__body__item" onClick={ ()=> props.history.push(`/groups/${props.group._id}`)}>
    <div className="mreview__body__item__imgdiv">
      <img className="mreview__body__item__imgdiv__img" src="http://lorempixel.com/100/100" />
      <h3> {props.group.name} </h3>

    </div>
    <div className="mreview__body__item__text">
      <p>{props.group.description}</p>
      {/* <img src="http://lorempixel.com/500/100" /> */}
      <ul>
        {props.group.members && props.group.members.map( (band, index) => (
          <li key={index}> Member#{index}: {member.name} - {member.instrument} </li>
        ))}
      </ul>
    </div>
  </div>
);
