import React from 'react';
import { Route } from 'react-router-dom'

import Main from '../containers/Main.js';
import { SignUp, LogIn } from '../users'
import { CreateGroup, ManageGroup, GroupProfile } from '../groups';
import Profile from '../containers/profile.js';
import Search from '../containers/Search.js';
import Gigs from '../containers/Gigs.js';

const RouteList = (props) => (
  <div id="page-wrap">
    <Route exact path="/" component={Main} />
    <Route path="/profile" component={Profile} />
    <Route path="/search" component={Search} />
    <Route path="/gigs" component={Gigs} />
    <Route path="/creategroup" component={CreateGroup} />
    <Route path="/managegroup" component={ManageGroup} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={LogIn} />
    <Route path="/testgroup" component={GroupProfile} />
  </div>
);

export default RouteList;