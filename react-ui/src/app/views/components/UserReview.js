import React, { Component } from 'react';

import Review from './Review'

class UserReview extends Component{

  render(){
    return(
      <div className="profile__bottombody">
        <div className="profile__bottombody__botheader">
          <h1> Reviews </h1>
        </div>
        <div className="profile__bottombody__botmain">
          <div className="profile__bottombody__botmain__left">
            <p> Upcoming Events </p>
          </div>
          <div className="profile__bottombody__botmain__right">
            {this.props.reviews.map( (review, index) => (
              <Review
                key={index}
                cName="profile__bottombody__botmain__right__event"
                event={review.event}
                title={review.title}
                body={review.notes}
                imgSrc={review.image}

              />
            ))}
          </div>
        </div>
      </div>
    )
  }


}

export default UserReview
