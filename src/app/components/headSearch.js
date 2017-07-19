import React, { Component } from 'react';
import { connect } from "react-redux"

class HeadSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      searchType: "artist"
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name

  this.setState({
    [name]: value
  })


  }

  render(){
    return(
      <div>

        <form onSubmit={this.Search} className="queryHeader">
          <div className="queryHeader__searchtype">
            <select name="searchType" value={this.state.searchType} onChange={this.handleInputChange}>
              <option value="artist">Artist</option>
              <option value="venue">Venue</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="queryHeader__inputdiv">
            <input
              name="query"
              value={this.state.query}
              placeholder="Search for a venue or artist!"
              type="text"
              id="query"
              onChange={this.handleInputChange}
            />
          </div>

          <div className="queryHeader__submit">
            <button type="submit"> GO! </button>
          </div>
        </form>

      </div>
    )
  }
}

  export default HeadSearch;
