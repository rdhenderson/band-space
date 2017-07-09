//Here we grab React, and peel component out of the library using ES6 syntax.
import React, { Component } from 'react'
import { Container } from 'react-grid-system'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'

import axios from 'axios'

class Venue extends Component {
  constructor(props) {
    super(props);
  }

  //TODO: Add venues list to store along with action/reducers
  componentDidMount() {
    axios.get('/api/venues')
    .then( (venues) => console.log(venues));
  }

  render() {
    return (
        <Container>

        </Container>
    );
  }
}

export default Venue;
