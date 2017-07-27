//Here we grab React, and peel component out of the library using ES6 syntax.
import React, { Component } from 'react'
import Infinite from 'react-infinite';

import UserItem from './UserItem'

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

  handleClick(id) {
    return () => this.props.history.push(`users/${id}`);
  }

  render() {
    return (
      <div>
        <div className="mreview">
          <div className="mreview__header">
            <h2> Users around Washington D.C. </h2>
          </div>
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
          <div className="mreview__body">
            {(this.state.users.length <= 0) ? (
              <h1> Loading... </h1>
            ) : (
              <Infinite className="mreview__body__container" containerHeight={550} width={'100%'} elementHeight={200}>
                {this.state.venues.map( (item, index) => (
                  <UserItem
                    key={ index }
                    venue={ item }
                    handleClick={ this.handleClick(item._id)}
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
export default UserList;
