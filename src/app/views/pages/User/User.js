import React from 'react'
import { Route, Switch } from 'react-router-dom'

import UserList from './UserList'
import UserProfile from './UserProfile'

const User = ({match}) => (
  <Switch>
    <Route exact path={`${match.url}`} component={UserList}/>
    <Route path={`${match.url}/:id`} component={UserProfile}/>
  </Switch>
)

export default User;
