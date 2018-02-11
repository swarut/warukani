import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import { authenticate } from '../actions/actions'
import { Redirect } from 'react-router'

import '../../css/home.css';

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
        60d462e5c9b8e4fcbaaa72433ff04bab
        <TextField
          errorText={this.props.invalid_token ? 'Invalid token' : null}
          onChange={this.onTokenChange}
          hintText='Your api token'
          floatingLabelText='Your api token' />
        <br/>
        <RaisedButton label='Go' onClick={this.onClick} />
        {this.props.username ?
          <Redirect to="/loading" /> : "xxx"
        }
      </div>
    )
  }
}

Home.propTypes = {
  onButtonClick: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    invalid_token: state.errors.invalid_token,
    token: state.user.token,
    username: state.user.username
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onButtonClick: (token) => {
      axios.get(`https://www.wanikani.com/api/user/${token}`)
      .then(function (response) {
        dispatch(authenticate(token, response.data.user_information.username))
      })
      .catch(function (error) {
        console.log("error", error)
        dispatch({ type: 'ERROR.INVALID_TOKEN' })
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
