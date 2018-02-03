import React from 'react';
import '../../css/word-item.css'

class WordItem extends React.Component {
  render() {
    return (
      <div className='word-item'>
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
    )
  }
}

export default WordItem
