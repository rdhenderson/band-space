import React from 'react'
import Infinite from 'react-infinite';
import { VenueScrollItem, UserScrollItem, GroupScrollItem } from './ScrollItems.js'

const ResultsList = ({searchType, items, clickHandler}) => {
  const titleCaseSearchType = searchType.charAt(0).toUpperCase() + searchType.slice(1)

  return (
    <div className="mreview">
      <div className="mreview__header">
        <h2> {`${titleCaseSearchType} in Washington D.C.`} </h2>
      </div>
      <div className="mreview__body">
        <Infinite className="mreview__body__container" containerHeight={550} width={'100%'} elementHeight={200}>

          {searchType === 'venues' &&
            items.map( (item, index) => (
              <VenueScrollItem
                item={item}
                key={index}
                clickHandler={clickHandler}
              />
            ))
          }
          {searchType === 'artist' &&
            items.map( (item, index) => (
              <UserScrollItem
                item={item}
                key={index}
                clickHandler={clickHandler}
              />
            ))
          }
          {searchType === 'groups' &&
            items.map( (item, index) => (
              <GroupScrollItem
                item={item}
                key={index}
                clickHandler={clickHandler}
              />
            ))
          }
        </Infinite>
      </div>
    </div>
  )
}

export default ResultsList
