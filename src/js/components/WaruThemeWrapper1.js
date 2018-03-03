import React from 'react'
import '../../css/warutheme1.css';

class WaruThemeWrapper1 extends React.Component {
  render() {
    return (
      <div className='body-wrapper warutheme1'>
        {this.props.children}
      </div>
    )
  }
}

export default WaruThemeWrapper1
