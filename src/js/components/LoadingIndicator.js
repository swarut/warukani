import React from 'react'
import '../../css/loading-indicator.css';

class LoadingIndicator extends React.Component {
  render() {
    return (
      <div className='loading-indicator'>
        <div className='loading-progress' />
      </div>
    )
  }
}

export default LoadingIndicator
