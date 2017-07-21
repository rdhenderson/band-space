//Here we grab React, and peel component out of the library using ES6 syntax.
import React, { Component } from 'react'
import axios from 'axios'
import Infinite from 'react-infinite';

import VenueItem from '../venues/VenueItem'
import VenueProfileEditArrays from './VenueProfileEditArrays'
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : [],
      showAddUser: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Get list of venues from database when component is mounting
  // Draw list of components
  componentDidMount() {
    axios.get('/api/users')
    .then( ({ data }) => {
      console.log("Users retrieved: ", data);
      this.setState({ users : data });
    });
  }

  handleSubmit(values) {
    console.log("added venue", values);
    const token = localStorage.get('jwtToken');
    axios({
      method: 'post',
      url: `/api/users`,
      data: values,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    // axios.post('/api/venues/', {data: values})
    .then( (result) => console.log("Added a venue!", result) )
  }

  handleClick(id) {
    return () => this.props.history.push(`venues/${id}`);
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
                  <VenueItem
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
