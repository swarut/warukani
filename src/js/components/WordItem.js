import React from 'react'
import PropTypes from 'prop-types'
import '../../css/word-item.css'


class WordItem extends React.Component {

  render() {

    return (
      <div className='word-item'>
        <div className='word'>
          <div className='word'>{this.props.character}</div>
          <div className='level'>{this.props.level}</div>
        </div>
        <div className='details'>
          <div className='yomu'>{this.props.kana}</div>
          <div className='meaning'>{this.props.meaning}</div>
          <div className='tags'>
            {this.props.tags.map( (t, index) =>
              <div key={index} className='tag'>{t}</div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

WordItem.propTypes = {
  character: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  kana: PropTypes.string.isRequired,
  meaning: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
}

WordItem.defaultProps = {
  character: '進展',
  level: '4',
  kana: 'しんてん',
  meaning: 'advance',
  tags: ['a1', 'b2', 'c3']
}

export default WordItem
