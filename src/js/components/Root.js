import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'
import About from './About'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const Root = () => (
  <Router>
    <MuiThemeProvider>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </MuiThemeProvider>
  </Router>
)

export default Root
