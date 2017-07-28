//Here we grab React, and peel component out of the library using ES6 syntax.
import React, { Component } from 'react'

import { Spinner, ResultsList } from '../../../components'

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddGroup: false,
    };
  }

  // Get list of venues from database when component is mounting
  // Draw list of components
  componentDidMount() {
    this.props.getGroupList();
  }

  render() {
    if (this.props.isLoading) return (<Spinner />)

    return (
      <div>
        <div className="mreview">
          <div className="mreview__header">
            <h2> Groups around Washington D.C. </h2>
          </div>

          <div className="mreview__body">
            <ResultsList
              searchType='groups'
              items={this.props.groups}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default GroupList;

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
