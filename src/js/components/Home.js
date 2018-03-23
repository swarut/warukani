import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'
import { authenticate } from '../actions/actions'
import { Redirect } from 'react-router'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
    this.onTokenChange = this.onTokenChange.bind(this)
  }
  componentDidMount() {
    let token = localStorage.getItem('wanikani_token')
    if (token) {
      this.props.onButtonClick(token)
    }
  }
  onClick(e) {
    this.props.onButtonClick(this.state.token)
  }
  onTokenChange(e) {
    this.setState({ token: e.target.value })
  }
  renderRedirect() {
    if(this.props.username && (this.props.vocabs && this.props.vocabs.length !== 0)) {
      return <Redirect to="/dashboard" />
    }
    if(this.props.username) {
      return <Redirect to="/loading" />
    }
    return ""
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
        {this.renderRedirect()}
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
    username: state.user.username,
    vocabs: state.vocabs.vocabs
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onButtonClick: (token) => {
      axios.get(`https://www.wanikani.com/api/user/${token}`)
      .then(function (response) {
        dispatch(authenticate(token, response.data.user_information.username))
        localStorage.setItem('wanikani_token', token)
      })
      .catch(function (error) {
        console.log("error", error)
        dispatch({ type: 'ERROR.INVALID_TOKEN' })
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
