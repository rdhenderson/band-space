import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import UserList from './UserList'

import ProfilePage from './profile/ProfilePageContainer.js'
const User = (props) => (
  <Switch>
    <Route exact path='/users' component={ProfilePage}/>
    <Route path='/users/:id' component={ProfilePage}/>
  </Switch>
)
export default User;
