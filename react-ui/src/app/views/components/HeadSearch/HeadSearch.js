import React, { Component } from 'react';

class HeadSearch extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     // searchQuery: "",
  //     // searchType: "users"
  //   }
  //   // this.handleInputChange = this.handleInputChange.bind(this);
  // }

  // handleInputChange(event){
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name
  //
  //   this.setState({
  //     [name]: value
  //   });
  // }
componentWillUnmount(){
  this.props.resetSearch();
}
  render(){
    return(
      <div>

        <form onSubmit={this.Search} className="queryHeader">
          <div className="queryHeader__searchtype">
            <select name="searchType" value={this.props.searchType} onChange={this.props.changeSearchType}>
              <option value="users">Users</option>
              <option value="venues">Venues</option>
              <option value="groups">Groups</option>
              <option value="all">All</option>
            </select>
          </div>
          <div className="queryHeader__inputdiv">
            <input
              name="searchQuery"
              value={this.props.query}
              placeholder="Search for a venue or artist!"
              type="text"
              id="query"
              onChange={this.props.updateQuery}
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
