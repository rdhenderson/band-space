import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Main from './containers/Main.js'
import Signup from './containers/user_signup.js'
// import SignUpPage from './containers/users/signup-page'

const AppRoutes = () => (
  <Router>
    <main>
    <div>
      {/* <ul>
        <li><Link to="/">Main</Link></li>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
      </ul>

      <hr/> */}

      <div className="navbar">
        <div className="navbar__links">
          <ul>
            <li href="#"> Reviews </li>
            <li href="#"> Talk Shop </li>
            <li href="#"> Jobs </li>
          </ul>
        </div>
        <div className="navbar__logo">
          <h3> <Link to="/"> BandSpace </Link> </h3>
        </div>
        <div className="navbar__profile">
          <p> <Link to="/signup"> Log In/SignUp </Link> </p>
        </div>
      </div>

      <Route exact path="/" component={Main}/>
      <Route path="/login" component={About}/>
      <Route path="/signup" component={Signup}/>
    </div>
    </main>
  </Router>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
        // <Link to={`${match.url}/components`}>
        //   Components
        // </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>
//
    // <Route path={`${match.url}/:topicId`} component={Topic}/>
//     <Route exact path={match.url} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )
//
// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

export default AppRoutes
