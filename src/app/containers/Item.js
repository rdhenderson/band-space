import React from 'react'

export const Item = (props) => (
  <div className={props.classes[0]}>
    <h3> {props.title} </h3>
    <p> {props.description} </p>
    <img className={props.classes.join('__')} src={props.imgSrc} />
  </div>
)

export const ItemContainer = (props) => (
  <div className="profile__bottombody">
    <div className="profile__bottombody__botheader">
      <h1> {props.title} </h1>
    </div>
    <div className="profile__bottombody__botmain">
      <div className="profile__bottombody__botmain__left">
        <p> {props.description} </p>
      </div>
      <div className="profile__bottombody__botmain__right">
        {props.reviews.map( (review, index) => (
          <Item
            key={index}
            title={review.title}
            description={review.body}
            imgSrc={review.image}
            classes={["profile__bottombody__botmain__right__event", "stars"]}
          />
        ))}
      </div>
    </div>
  </div>
);
