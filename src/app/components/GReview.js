import React, { Component } from 'react';
import { connect } from "react-redux";
import {Collapse} from 'react-collapse';

class GReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    }
  }

  render(){
    return(
    <div key={this.props.index} className="groupProfile__bottombody__botmain__right__event">
      <h3> {this.props.name} </h3>
      <p> {this.props.title} </p>
      <img className="groupProfile__bottombody__botmain__right__event__stars" src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
      <Collapse isOpened={this.state.isOpened}>
        <div><p> {this.props.details} </p> </div>
      </Collapse>
    </div>
  )
  }

}

export default GReview;
