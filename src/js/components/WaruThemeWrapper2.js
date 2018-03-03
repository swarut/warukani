import React from 'react'
import '../../css/warutheme2.css';

class WaruThemeWrapper2 extends React.Component {
  render() {
    return (
      <div className='body-wrapper warutheme1'>
        {this.props.children}
      </div>
    )
  }
}

export default WaruThemeWrapper2
