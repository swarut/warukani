import React from 'react'
import LoadingIndicator from './LoadingIndicator'
import '../../css/loading.css';

class Loading extends React.Component {
  render() {
    return (
      <div className='loading'>

        <div className='loading-wrapper'>
          Loading
        </div>
        <LoadingIndicator />
      </div>
    )
  }
}

export default Loading
