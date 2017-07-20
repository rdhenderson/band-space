//Here we grab React, and peel component out of the library using ES6 syntax.
import React, { Component } from 'react'
import axios from 'axios'
import Infinite from 'react-infinite';

import VenueItem from './VenueItem'

class VenueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues : []
    };
  }

  // Get list of venues from database when component is mounting
  // Draw list of components
  componentDidMount() {
    axios.get('/api/venues')
    .then( ({ data }) => {
      console.log("Venues retrieved: ", data);
      const venues =  data.slice(0, 50);
      this.setState({ venues : data });
    });
  }

  render() {
    return (
      <div>
        <div className="mreview">
          <div className="mreview__header">
            <h2> Venues around Washington D.C. </h2>
          </div>
          <div className="mreview__body">
            {(this.state.venues.length < 0) ? (
              <h1> Loading... </h1>
            ) : (
              <Infinite className="mreview__body__container" containerHeight={550} width={'100%'} elementHeight={200}>
                {this.state.venues.map( (item, index) => (
                  <VenueItem
                    venue={ item }
                    index={ index }
                  />
                ))}
              </Infinite>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default VenueList;
