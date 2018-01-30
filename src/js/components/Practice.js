import React from 'react'
import '../../css/practice.css'
import TextField from 'material-ui/TextField';
class Practice extends React.Component {
  render() {
    return (
      <div className='practice'>
        <div className='practice-wraper'>
          <div className='question'>
            Advanced
          </div>
          <div className='answer'>
            <TextField hintText='Your api token' floatingLabelText='Your api token'/>
          </div>
          <div className='solutions'>
            <div className='item'>
              <div className='word'>進展</div>
            </div>
            <div className='item'>
              <div className='word'>進展</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Practice
