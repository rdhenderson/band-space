import React, { Component } from 'react';
import {Collapse} from 'react-collapse';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    }
    this.openClose = this.openClose.bind(this);
  }

  openClose(e){
    e.preventDefault();
    if(this.state.isOpened === false){
      this.setState({
        isOpened: true
      });
    }
    else{
      this.setState({
        isOpened: false
      });
    }
  }

  render(){
    return(
    <div key={this.props.index} className={this.props.cName}>
      <h3> {this.props.event} </h3>
      <p> {this.props.title} </p>
      <img alt="stars" className={`${this.props.cName}__stars`} src="http://keycdn.theouterhaven.net/wp-content/uploads/2014/12/5star.png-610x0.png" />
      <Collapse isOpened={this.state.isOpened}>
        <div><p> {this.props.body} </p> </div>
      </Collapse>
      <img alt="stars" className="reviewExpand" src="/img/add.svg" onClick={this.openClose} />
    </div>
  )
  }

}

export default Review;
