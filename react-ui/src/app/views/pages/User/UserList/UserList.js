//Here we grab React, and peel component out of the library using ES6 syntax.
import React, { Component } from 'react'

import { Spinner, ResultsList, SearchBar } from '../../../components'

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
    this.props.fetchUserList();
    this.props.changeSearchType({target:{value:'users'}});

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
