import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'


import Home from './Home'
import About from './About'
import Loading from './Loading'
import Dashboard from './Dashboard'
import Practice from './Practice'
import Setting from './Setting'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import waruTheme from '../warutheme.js';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';

import Warukani from '../reducers/warukani'



// let theme = localStorage.getItem('theme')
// let theme_css = '../../css/app.css'
// if(theme) {
//   theme_css = `../../css/${theme}.css`
// }
import '../../css/app.css';



// import '../../css/style.css';
// import '../../css/root.css';

// let store = createStore(
//   Warukani,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  Warukani,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// const PrivateRoute = ({component: Component, ...rest}) => {
//   const state = store.getState()
//   if(state.user.token && state.user.username) {
//     console.log("authenticated")
//     return (<Route {...rest} component={Component} />)
//   }
//   else {
//     console.log("getout")
//     return <Redirect to="/" />
//   }
// }
const authenticated = () => {
  return () => {
    const state = store.getState()
    const s = state.user.token && state.user.username
    return s
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    authenticated()() ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)


class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider muiTheme={getMuiTheme(this.props.theme)}>
            <div className='real-body'>
              <div className='nav'>
                <ul>
                  <li><Link to="/"><FlatButton label="Home" primary={true} /></Link></li>
                  <li><Link to="/loading"><FlatButton label="Loading" primary={true} /></Link></li>
                  <li><Link to="/dashboard"><FlatButton label="Dashboard" primary={true} /></Link></li>
                  <li><Link to="/practice"><FlatButton label="Practice" primary={true} /></Link></li>
                  <li><Link to="/setting"><FlatButton label="Setting" primary={true} /></Link></li>
                  <li><Link to="/about"><FlatButton label="About" primary={true} /></Link></li>
                </ul>
              </div>
              <div className='body'>
                <Route exact path="/" component={Home} />
                <Route exact path="/loading" component={Loading} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/practice" component={Practice} />
                <Route exact path="/setting" component={Setting} />
                <Route exact path="/about" component={About} />
              </div>
            </div>
          </MuiThemeProvider>
        </Router>
      </Provider>
    )
  }
}

Root.defaultProps = {
  theme: require('../warutheme.js').default,
  themeName: 'warutheme1'
}

export default Root
