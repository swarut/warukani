import React from 'react'
import PropTypes from 'prop-types'

class LoadingIndicator extends React.Component {

  completion() {
    return (this.props.currentProgress / this.props.totalProgress) * 100
  }

  render() {
    return (
      <div className='loading-indicator'>
        <div className='loading-progress' style={{width: this.completion() + '%'}} />
        <div className='progress-number'>{this.completion()}</div>
      </div>
    )
  }
}

LoadingIndicator.propTypes = {
  currentProgress: PropTypes.number.isRequired,
  totalProgress: PropTypes.number.isRequired
}

LoadingIndicator.defaultProps = {
  currentProgress: 40,
  totalProgress: 100
}

export default LoadingIndicator
