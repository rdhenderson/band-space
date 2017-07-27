import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { VenueList } from './VenueList'
import { VenueProfile } from './VenueProfile'

const Venue = (props) => (
  <Switch>
    <Route exact path='/venues' component={VenueList}/>
    <Route path='/venues/:id' component={VenueProfile}/>
  </Switch>
)
export default Venue;
