import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UserList from './profile/UserList'

import { ProfilePage as UserProfile } from './profile/ProfilePageContainer.js'
const User = (props) => (
  <Switch>
    <Route exact path='/users' component={UserList}/>
    <Route path='/users/:id' component={UserProfile}/>
  </Switch>
)
export default User;
