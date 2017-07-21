import React from 'react';
import { Route } from 'react-router-dom'

import Main from '../containers/Main.js';
import { SignUp, LogIn, UserProfile } from '../users'
import { CreateGroup, ManageGroup, GroupProfile } from '../groups';
import Venue from '../venue/Venue.js';
import Search from '../containers/Search.js';
import Gigs from '../containers/Gigs.js';

const RouteList = (props) => (
  <div id="page-wrap">
    <Route exact path="/" component={Main} />
    {/* <Route path="/profile" component={Profile} /> */}
    <Route path="/venues" component={Venue} />
    <Route path="/userprofile" component={UserProfile} />
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
