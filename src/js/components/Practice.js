import React from 'react'
import '../../css/practice.css'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

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
            <div className='item'>
              <div className='word'>
                <div className='word'>進展</div>
                <div className='level'>4</div>
              </div>
              <div className='details'>
                <div className='yomu'>しんてん</div>
                <div className='meaning'>Advance</div>
                <div className='tags'>
                  <div className='tag'>evo1</div>
                  <div className='tag'>evo2</div>
                  <div className='tag'>evo3</div>
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='word'>
                <div className='word'>進展</div>
                <div className='level'>4</div>
              </div>
              <div className='details'>
                <div className='yomu'>しんてん</div>
                <div className='meaning'>Advance</div>
                <div className='tags'>
                  <div className='tag'>evo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Practice
