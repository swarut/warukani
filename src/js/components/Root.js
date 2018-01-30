import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Loading from './Loading'
import Dashboard from './Dashboard'
import Practice from './Practice'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import waruTheme from '../warutheme.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import '../../css/style.css';
import '../../css/root.css';

const Root = () => (
  <Router>
    <MuiThemeProvider muiTheme={getMuiTheme(waruTheme)}>
      <div className='real-body'>
        <div className='nav'>
          <ul>
            <li><Link to="/"><FlatButton label="Home" primary={true} /></Link></li>
            <li><Link to="/loading"><FlatButton label="Loading" primary={true} /></Link></li>
            <li><Link to="/dashboard"><FlatButton label="Dashboard" primary={true} /></Link></li>
            <li><Link to="/Practice"><FlatButton label="Practice" primary={true} /></Link></li>
            <li><Link to="/about"><FlatButton label="About" primary={true} /></Link></li>
          </ul>
        </div>
        <div className='body'>
          <Route exact path="/" component={Home} />
          <Route exact path="/loading" component={Loading} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/practice" component={Practice} />
          <Route exact path="/about" component={About} />
        </div>
      </div>
    </MuiThemeProvider>
  </Router>
)

export default Root
