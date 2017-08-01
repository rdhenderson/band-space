import React from 'react'
import Infinite from 'react-infinite';
import { VenueItem, UserItem, GroupItem } from './ScrollItems.js'

const displaySelector = {
  'venues': VenueItem,
  'users': UserItem,
  'groups': GroupItem,
  'venue': VenueItem,
  'user': UserItem,
  'group': GroupItem
}

const ResultsList = ({searchType, displayList }) => {
  console.log("SearchType: ", searchType);
  console.log("displayList", displayList);
  if (!displayList || displayList.length === 0) return (
    <div className="mreview">
      <div className="mreview__header">
        <h4> No results found ... please try another query </h4>
      </div>
    </div>
  );
  const titleCaseSearchType = searchType.charAt(0).toUpperCase() + searchType.slice(1)
  // Set DisplayItem to proper element for group/venue/user
  // if we aren't diplaying multiple types, just set DisplayItem now.
  const DisplayItem = displaySelector[searchType];

  return (
    <div className="mreview">
      <div className="mreview__header">
        <h2> {`${titleCaseSearchType} in Washington D.C.`} </h2>
      </div>
      <div className="mreview__body">
        <Infinite className="mreview__body__container" containerHeight={550} width={'100%'} elementHeight={200} elementWidth={'100%'}>

          {displayList.map( (item, index) => (
            <DisplayItem
              key={item._id}
              item={item}
            />
          ))}

        </Infinite>
      </div>
    </div>
  )
}

export default ResultsList
