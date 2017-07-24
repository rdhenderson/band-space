
import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import { Provider } from "react-redux"

import store from './store';
import {
  Main,
  NavMenu,
  SignUp,
  LogIn,
  UserPrivateProfile,
  UserList,
  UserPublicProfile,
  CreateGroup,
  GroupProfile,
  Venue,
  Search,
  Gigs,
  Welcome } from './pages';


// Remove tap delay for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();


render(
  <Provider store={store}>
    <Router>
      {/* <Route history={history}> */}
      <Main>
        <Route exact path="/" component={Welcome} />
        <Route path="/profile" component={UserPrivateProfile} />
        <Route exact path='/users' component={UserList}/>
        <Route path='/users/:id' component={UserPublicProfile}/>
        <Route path="/venues" component={Venue} />
        <Route path="/search" component={Search} />
        <Route path="/gigs" component={Gigs} />
        <Route path="/creategroup" component={CreateGroup} />
        <Route exact path="/group" component={CreateGroup} />
        <Route exact path="/group/:id" component={GroupProfile} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        <Route path="/testgroup" component={GroupProfile} />
      </Main>
      {/* </Route> */}
    </Router>
  </Provider>,
  document.getElementById('root'));
