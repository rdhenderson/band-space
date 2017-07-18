import React, { Component } from 'react';
import { connect } from "react-redux";

class ManageGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ""
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name

  this.setState({
    [name]: value
  })


  }

  render(){
    return(
      <h1> Manage Group </h1>
    )
  }

}

export default ManageGroup;
