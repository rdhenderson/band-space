import React, { Component } from 'react';
import { connect } from "react-redux";
import { Collapse } from 'react-collapse';

const UserItem = ({ user, handleClick }) => (
   <div className="mreview__body__item" onClick={handleClick}>
     <div className="mreview__body__item__imgdiv">
       <img className="mreview__body__item__imgdiv__img" src={user.image.img} />
       <h1> {user.name} </h1>
       <h3>{`${user.address.street} ${user.address.city}, ${user.address.state}`} </h3>
       <div className="mreview__body__item__text">
         <p> {user.description} </p>
         <ul>
           {user.groups.map( (group, index) => (
             <li key={index}> {group.name} - {group.description} </li>
           ))}
         </ul>
       </div>
     </div>
   </div>
 );

export default UserItem;
