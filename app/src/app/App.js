import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { Main, SignUp, LogIn, Home } from './views/pages';


// Remove tap delay for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();


class App extends Component {
  render() {
    return (
      <Main>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LogIn} />
        {/* <Route path="/profile" component={UserPrivateProfile} /> */}
        {/* <Route exact path='/users' component={UserList}/> */}
        {/* <Route path='/users/:id' component={UserPublicProfile}/> */}
        {/* <Route path="/venues" component={Venue} /> */}
        {/* <Route path="/search" component={Search} /> */}
        {/* <Route path="/gigs" component={Gigs} /> */}
        {/* <Route path="/creategroup" component={CreateGroup} /> */}
        {/* <Route exact path="/group/:id" component={GroupProfile} /> */}
      </Main>
    );
  }
}

export default App
