import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import axios from 'axios';


class Search extends Component {

    constructor(props) {
      super(props);
      this.state = {
        venues : []
      }
    }

  componentDidMount(){
    axios.get('/api/venues')
    .then(res => {
      this.setState({venues: res.data});
    })
    .catch(err => {
      console.log(err);
    });
  }




    render() {
      return (
        <div className="search">

          <div className="search__result">

            {this.state.venues.map((item, index) => (
              <div key={index} className="search__result__div" id={item.id}>
                <h3 className="search__result__name"> {item.name} </h3>
                <p> {item.address} </p>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              </div>
            ))}

          </div>


      </div>
      )

    }
  }

export default Search;
