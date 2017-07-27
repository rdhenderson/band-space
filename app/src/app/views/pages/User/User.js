import React from 'react'
import { Route } from 'react-router-dom'

import UserList from './UserList'
import UserProfile from './UserProfile'

const User = ({match}) => (
  <div>
    <Route exact path={`${match.url}`} component={UserList}/>
    <Route path={`${match.url}/:id`} component={UserProfile}/>
  </div>
)

export default User;
