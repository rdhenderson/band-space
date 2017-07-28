import React from 'react'
import { Route, Switch } from 'react-router-dom'

import GroupList from './GroupList'
import GroupProfile from './GroupProfile'

const Group = ({match}) => (
  <Switch>
    <Route exact path={`${match.url}`} component={GroupList}/>
    <Route path={`${match.url}/:id`} component={GroupProfile}/>
  </Switch>
)

export default Group;
