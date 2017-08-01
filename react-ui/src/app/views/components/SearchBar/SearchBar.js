
import React from 'react';

const SearchBar = (props) => (
  <div className="splash__searchbar">
    <div className="splash__searchbar__icondiv">
      <select name="searchType" value={props.searchType} onChange={props.changeSearchType}>
        <option value="venues">Venue</option>
        <option value="users">User</option>
        <option value="groups">Group</option>
      </select>
    </div>
    <div className="splash__searchbar__input">

      <input
        name="searchQuery"
        value={props.query}
        placeholder="Search for a venue, user or group"
        type="text"
        onChange={props.updateQuery}
      />
    </div>
  </div>
)

export default SearchBar;
