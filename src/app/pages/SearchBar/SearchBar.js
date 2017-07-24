
import React from 'react';

const SearchBar = (props) => (
  <div className="splash__searchbar">
    <div className="splash__searchbar__icondiv">
      <select name="searchType" value={props.searchType} onChange={props.handleInputChange}>
        <option value="artists">Artist</option>
        <option value="venues">Venue</option>
        <option value="users">User</option>
      </select>
    </div>
    <div className="splash__searchbar__input">
      <input
        name="searchQuery"
        value={props.searchQuery}
        placeholder="Search for a venue or artist!"
        type="text"
        onChange={props.handleInputChange}
      />
    </div>
  </div>
)

export default SearchBar;
