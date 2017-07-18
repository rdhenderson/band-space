import React, { Component } from 'react';
import { connect } from "react-redux";

import Dropzone from 'react-dropzone';

class CreateGroup extends Component {
    constructor(props) {
    super(props);
    this.state = {
      name: '',
      shareholders: [{ name: '' }],
      address: "",
      phonenumber: "",
      description: "",
      accepted: [],
      rejected: []
    };
  }

  handleInputChange(event){
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name

  this.setState({
    [name]: value
  })

  }


  handleShareholderNameChange = (idx) => (evt) => {
    evt.preventDefault();
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
  }

  handleSubmit = (evt) => {
    const { name, shareholders } = this.state;
    alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
  }

  handleAddShareholder = () => {
    this.setState({ shareholders: this.state.shareholders.concat([{ name: '' }]) });
  }

  handleRemoveShareholder = (idx) => () => {
    this.setState({ shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx) });
  }

  render() {
    return (
      <div className="createGroup">
        <div className="createGroup__header">
          <h1> Time to Rock the World </h1>
        </div>
          <form className="createGroup__body" onSubmit={this.handleSubmit}>

          <div className="createGroup__body__left">
            <div className="createGroup__body__left__img">
              {this.state.accepted.length === 0 && <img src="http://lorempixel.com/200/200" />}
              {this.state.accepted.length !==0 && <img src={this.state.accepted.name} /> }
              <Dropzone
            accept="image/jpeg, image/png"
            onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
          >
            <p>Drop your Band's Profile Picture Here</p>
          </Dropzone>
            </div>
            <div className="createGroup__body__left__name">
              <input
                type="text"
                placeholder="What's Your Groups Name?"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="createGroup__body__left__members">



              {this.state.shareholders.map((shareholder, idx) => (
                <div className="createGroup__body__left__members__item">
                  <input
                    type="text"
                    placeholder={`Member #${idx + 1} name`}
                    value={shareholder.name}
                    onChange={this.handleShareholderNameChange(idx)}
                  />
                  <button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">-</button>
                </div>
              ))}
              <button type="button" onClick={this.handleAddShareholder} className="small">Add Member</button>
            </div>
          </div>

          <div className="createGroup__body__right">
            <div className="createGroup__body__right__content">
              <div className="createGroup__body__right__content__header">
                <h1> Boring Stuff </h1>
              </div>
              <div className="createGroup__body__right__content__address">
                <input
                  type="text"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="createGroup__body__right__content__phone">
                <input
                  type="text"
                  placeholder="Can I have your number?...Can I have it"
                  value={this.state.phonenumber}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="createGroup__body__right__content__description">
                <textarea
                  type="text"
                  placeholder="Tell me about yourself...not too much though...maybe just the cool bits"
                  value={this.state.description}
                  onChange={this.handleInputChange}
                />
              </div>
              <button type="button"> Submit> </button>
            </div>


          </div>

          </form>
      </div>


    )
  }
}

export default CreateGroup;
