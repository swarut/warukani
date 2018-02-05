import React from 'react'
import LoadingIndicator from './LoadingIndicator'
import { connect } from 'react-redux'
import '../../css/loading.css';

class Loading extends React.Component {
  render() {
    return (
      <div className='loading'>

        <div className='loading-wrapper'>
          Loading {this.props.username}
        </div>
        <LoadingIndicator />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    token: state.user.token,
    username: state.user.username
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Loading)
