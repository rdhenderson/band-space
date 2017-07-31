import React from 'react'
import Infinite from 'react-infinite';
import { VenueItem, UserItem, GroupItem } from './ScrollItems.js'

const displaySelector = {
  'venues': VenueItem,
  'users': UserItem,
  'groups': GroupItem
}

const ResultsList = ({searchType, items, clickHandler}) => {
  const titleCaseSearchType = searchType.charAt(0).toUpperCase() + searchType.slice(1)
  if (!items || !(items.length > 0)) return (
    <h1> "ERROR, Please give us data" </h1>
  );
  // Set DisplayItem to proper element for group/venue/user
  const DisplayItem = displaySelector[searchType];

  return (
    <div className="mreview">
      <div className="mreview__header">
        <h2> {`${titleCaseSearchType} in Washington D.C.`} </h2>
      </div>
      <div className="mreview__body">
        <Infinite className="mreview__body__container" containerHeight={550} width={'100%'} elementHeight={200} elementWidth={'100%'}>

          {items.map( (item, index) => (
            <DisplayItem
              key={item._id}
              item={item}

            />
          ))
          }

        </Infinite>
      </div>
    </div>
  )
}

export default ResultsList
