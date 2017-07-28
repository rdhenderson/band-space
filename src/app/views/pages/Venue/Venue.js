import React from 'react'
import { Route } from 'react-router-dom'
import VenueList from './VenueList'
import VenueProfile from './VenueProfile'

const Venue = ({match}) => (
  <div>
    <Route exact path={`${match.url}`} component={VenueList}/>
    <Route path={`${match.url}/:id`} component={VenueProfile}/>
  </div>
)
export default Venue;
