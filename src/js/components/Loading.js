import React from 'react'
import LoadingIndicator from './LoadingIndicator'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  receivedUserInformation,
  fetchUserInformation,
  fetchVocabsOfAllLevels
} from '../actions/actions'
import { Redirect } from 'react-router'
// import '../../css/loading.css';

class Loading extends React.Component {

  componentDidMount() {
    this.props.onFetchUserInformation(this.props.token)
  }

  userFetchingStatus() {
    if (this.props.isUserFetching) {
      return (<div>Fetching user</div>)
    }
    else {
      return (<div>........</div>)
    }
  }

  render() {
    return (
      <div className='loading'>

        <div className='loading-wrapper'>
          Loading {this.props.username}, level #{this.props.level}
        </div>
        <LoadingIndicator currentProgress={this.props.progressCount} totalProgress={this.props.totalLevel}/>
        <div> is user fetching: {this.props.isUserFetching ? 'true' : 'false'}</div>
        <div> was user fetched: {this.props.wasUserFetched ? 'true' : 'false'}</div>
        <div> is vocabs fetching: {this.props.isVocabFetching ? 'true' : 'false'}</div>
        <div> was vocabs fetched: {this.props.wasVocabFetched ? 'true' : 'false'}</div>
        {this.props.wasVocabFetched ?
          <Redirect to="/dashboard" /> : "xxx"
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.user.token,
    username: state.user.username,
    level: state.user.userInformation ? state.user.userInformation.level : "xx",
    isUserFetching: state.user.isFetching,
    wasUserFetched: state.user.wasFetched,
    isVocabFetching: state.vocabs.isFetching,
    wasVocabFetched: state.vocabs.wasFetched,
    totalLevel: state.vocabs.totalLevel,
    progressCount: state.vocabs.progressCount
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFetchUserInformation: (token) => {
      let url = `https://www.wanikani.com/api/user/${token}/user-information`
      dispatch(fetchUserInformation())
      axios.get(url)
      .then(function (response) {
        dispatch(receivedUserInformation(response.data.user_information))
        dispatch(fetchVocabsOfAllLevels(token, response.data.user_information.level))
      })
      .catch(function (error) {
        dispatch({ type: 'ERROR.INVALID_TOKEN' })
      });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
