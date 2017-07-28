import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { Auth, Home, Venue, User, PrivateProfile } from './views/pages';
import { Main } from './views/layouts'

// Remove tap delay for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();


class App extends Component {
  render() {
    return (
      <Main>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/venues" component={Venue} />
        <Route path="/users" component={User} />
        <Route path="/profile" component={PrivateProfile} />

        {/* <Route path="/profile" component={UserPrivateProfile} /> */}
        {/* <Route exact path='/users' component={UserList}/> */}
        {/* <Route path='/users/:id' component={UserPublicProfile}/> */}
        {/* <Route path="/search" component={Search} /> */}
        {/* <Route path="/gigs" component={Gigs} /> */}
        {/* <Route path="/creategroup" component={CreateGroup} /> */}
        {/* <Route exact path="/group/:id" component={GroupProfile} /> */}
      </Main>
    );
  }
}

export default App
