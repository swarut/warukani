import React from 'react'
import LoadingIndicator from './LoadingIndicator'
import axios from 'axios'
import { connect } from 'react-redux'
import {fetch_user_information, received_user_information} from '../actions/actions'
import '../../css/loading.css';

class Loading extends React.Component {

  componentDidMount() {
    console.log("loading mount")
    this.props.onFetchUserInformation(this.props.token)
  }

  render() {
    return (
      <div className='loading'>

        <div className='loading-wrapper'>
          Loading {this.props.username}, level #{this.props.level}
        </div>
        <LoadingIndicator />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("loading - map state to prosp")
  return {
    token: state.user.token,
    username: state.user.username,
    level: state.user.user_information ? state.user.user_information.level : "xx"
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchUserInformation: (token) => {
      let url = `https://www.wanikani.com/api/user/${token}/user-information`
      console.log("url = ", url)
      dispatch(fetch_user_information())
      axios.get(url)
      .then(function (response) {
        console.log("response", response.data.user_information)
        dispatch(received_user_information(response.data.user_information))
      })
      .catch(function (error) {
        dispatch({ type: 'ERROR.INVALID_TOKEN' })
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
