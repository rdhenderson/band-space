import React from 'react';
import { Route } from 'react-router-dom'

import Main from '../containers/Main.js';
import { SignUp, LogIn, UserPrivateProfile, UserList, UserPublicProfile } from '../users'
import { CreateGroup, ManageGroup, GroupProfile } from '../groups';
import Venue from '../venue/Venue.js';
import Search from '../containers/Search.js';
import Gigs from '../containers/Gigs.js';

const RouteList = (props) => (
  <div id="page-wrap">
    <Route exact path="/" component={Main} />
    <Route path="/profile" component={UserPrivateProfile} />
    {/* <Route path="/user" component={User} /> */}
    <Route exact path='/users' component={UserList}/>
    <Route path='/users/:id' component={UserPublicProfile}/>
    <Route path="/venues" component={Venue} />
    <Route path="/search" component={Search} />
    <Route path="/gigs" component={Gigs} />
    <Route path="/creategroup" component={CreateGroup} />
    <Route path="/managegroup" component={ManageGroup} />
    <Route exact path="/group" component={CreateGroup} />
    <Route exact path="/group/:id" component={GroupProfile} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={LogIn} />
    <Route path="/testgroup" component={GroupProfile} />
  </div>
);

export default RouteList;
