//Here we grab React, and peel component out of the library using ES6 syntax.
import React, { Component } from 'react'
import propTypes from 'prop-types'

import { Spinner, ResultsList, SearchBar } from '../../../components'

class VenueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddVenue: false,
    };
  }

  // Get list of venues from database when component is mounting
  // Draw list of components
  componentDidMount() {
    this.props.fetchVenueList();
    this.props.changeSearchType({target:{value:'venues'}});
  }

  render() {
    if (this.props.isLoading) return (<Spinner />)

    return (
      <div>
        <div className="splash">
          <SearchBar />
        </div>

        <ResultsList />
      </div>
    );
  }
}

VenueList.propTypes = {
  isLoading: propTypes.bool.isRequired
};
export default VenueList;
