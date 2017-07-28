//Here we grab React, and peel component out of the library using ES6 syntax.
import React, { Component } from 'react'

import { Spinner, ResultsList } from '../../../components'

class VenueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddVenue: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Get list of venues from database when component is mounting
  // Draw list of components
  componentDidMount() {
    this.props.getVenueList();
  }

  handleSubmit(values) {
    this.props.addVenue(values);
  }

  render() {
    if (this.props.isLoading) return (<Spinner />)

    return (
      <div>
        <div className="mreview">
          <div className="mreview__header">
            <h2> Venues around Washington D.C. </h2>
          </div>

          <div className="mreview__body">
            <ResultsList
              searchType='venues'
              items={this.props.venues}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default VenueList;

{/* <button onClick={() =>
  this.setState({ showAddVenue: !this.state.showAddVenue })}>
  Add Venue
  </button>
  {this.state.showAddVenue &&
  <VenueProfileEditArrays
    onSubmit={this.handleSubmit}
    // initialValues={venue}
    fieldClass="profile__topbody__right"
    venue={{}}
  />
} */}
