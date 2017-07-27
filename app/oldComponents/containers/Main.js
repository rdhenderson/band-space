//Here we grab React, and peel component out of the library using ES6 syntax.
import React, { Component } from 'react'
// import { Container } from 'react-grid-system'

import Welcome from './welcome.js'


class Main extends Component {

  render() {
    return (
        // <Container>
            <Welcome />
        // </Container>

    );
  }
}

export default Main;
