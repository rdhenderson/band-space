//Here we grab React, and peel component out of the library using ES6 syntax.
import React, { Component } from 'react'

import ResultsList from '../../ResultsList'
import Spinner from '../../Common/Spinner'

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddUser: false,
    };
  }

  // Get list of venues from database when component is mounting
  // Draw list of components
  componentDidMount() {
    this.props.getUserList();
  }

  render() {
    if (this.props.isLoading) return (<Spinner />)

    return (
      <div>
        <div className="mreview">
          <div className="mreview__header">
            <h2> Users around Washington D.C. </h2>
          </div>

          <div className="mreview__body">
            <ResultsList
              searchType='users'
              items={this.props.users}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default UserList;

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
