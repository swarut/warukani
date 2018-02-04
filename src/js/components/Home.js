import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'

import createHistory from "history/createBrowserHistory"

import '../../css/home.css';

const history = createHistory()

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.onTokenChange = this.onTokenChange.bind(this)
  }
  onClick(e) {
    this.props.onButtonClick(this.state.token)
  }
  onTokenChange(e) {
    this.setState({ token: e.target.value })
  }
  render() {
    return (
      <div className='Home'>
        <h1>WaruKani</h1>

        <TextField
          errorText={this.props.invalid_token ? 'Invalid token' : null}
          onChange={this.onTokenChange}
          hintText='Your api token'
          floatingLabelText='Your api token' />
        <br/>
        <RaisedButton label='Go' onClick={this.onClick} />
      </div>
    )
  }
}

Home.propTypes = {
  onButtonClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    invalid_token: state.errors.invalid_token
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onButtonClick: (token) => {
      axios.get(`https://www.wanikani.com/api/user/${token}`)
      .then(function (response) {
        dispatch({
          type: 'AUTHENTICATE',
          username: response.data.user_information.username,
          token: token
        })
        // window.location = "/loading"
        history.push('/loading')
      })
      .catch(function (error) {
        dispatch({ type: 'ERROR.INVALID_TOKEN' })
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
