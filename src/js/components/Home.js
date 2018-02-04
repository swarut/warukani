import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import axios from 'axios'

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
        <h1>
          WaruKani {this.props.name}
        </h1>


        <TextField onChange={this.onTokenChange} ref='tokenField' hintText='Your api token' floatingLabelText='Your api token'/>
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
  return {}
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
      })
      .catch(function (error) {
        dispatch({ type: 'ERROR.INVALID_TOKEN' })
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
