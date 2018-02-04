import React from 'react'
import WordItem from './WordItem'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import '../../css/practice.css'

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
            <RaisedButton label=">" className='go-button' />
          </div>
          <div className='solutions'>
            <WordItem level='20'/>
          </div>
        </div>
      </div>
    )
  }
}

export default Practice
