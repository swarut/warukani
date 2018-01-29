import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Loading from './Loading'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import waruTheme from '../warutheme.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import '../../css/style.css';

const Root = () => (
  <Router>
    <MuiThemeProvider muiTheme={getMuiTheme(waruTheme)}>
      <div className='nav'>
        <ul>
          <li><Link to="/"><FlatButton label="Home" primary={true} /></Link></li>
          <li><Link to="/loading"><FlatButton label="Loading" primary={true} /></Link></li>
          <li><Link to="/about"><FlatButton label="About" primary={true} /></Link></li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route exact path="/loading" component={Loading} />
        <Route exact path="/about" component={About} />
      </div>
    </MuiThemeProvider>
  </Router>
)

export default Root
