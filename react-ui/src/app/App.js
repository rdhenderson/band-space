import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import { Auth, Home, Gigs, Venue, User, Group, PrivateProfile } from './views/pages';
import { Main } from './views/layouts'
import PrivateRoute from './views/components/PrivateRoute'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// Remove tap delay for material-ui
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Main>
          <Route exact path="/" component={Home} />
          <Route path="/auth" component={Auth} />
          <Route path="/gigs" component={Gigs} />
          <Route path="/venues" component={Venue} />
          <Route path="/users" component={User} />
          <Route path="/groups" component={Group} />
          <Route path="/profile" component={PrivateProfile} />
        </Main>
      </MuiThemeProvider>
    );
  }
}

export default App
