
import React from 'react';

const SearchBar = (props) => (
  <div className="splash__searchbar">
    {props.showSelect &&
      <div className="splash__searchbar__icondiv">
        <select name="searchType" value={props.searchType} onChange={props.handleInputChange}>
          <option value="users">User</option>
          <option value="venues">Venue</option>
          <option value="groups">Group</option>
        </select>
      </div>
    }
    <div className="splash__searchbar__input">

      <input
        name="searchQuery"
        value={props.searchQuery}
        placeholder={props.placeholderText}
        type="text"
        onChange={props.handleInputChange}
      />
    </div>
  </div>
)

export default SearchBar;
