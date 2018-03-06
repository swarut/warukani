import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import WordItem from './WordItem'
import TextField from 'material-ui/TextField'

class Dashboard extends React.Component {
  render () {
    return (
      <div className='dashboard'>
        <div className='practice-wraper'>
          <div className='question'>
            Lookup
          </div>
          <div className='answer'>
            <TextField hintText='yomi or reading' floatingLabelText='Keyword'/>
            <RaisedButton label=">" className='go-button' />
          </div>
          <div className='solutions'>
            <WordItem />
          </div>
        </div>
      </div>
    )
  }

}

export default Dashboard
