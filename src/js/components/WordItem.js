import React from 'react'
import PropTypes from 'prop-types'

class WordItem extends React.Component {

  render() {

    return (
      <div className='word-item'>
        <div className='word'>
          <div className='word'>{this.props.character}</div>
          <div className='level'>{this.props.level}</div>
        </div>
        <div className='details'>
          <div className='yomu'>
            {Object.keys(this.props.yomu).map((key) => {
              if(this.props.yomu[key]) {
                return <div key={key}>{key}: {this.props.yomu[key]}</div>
              }
              return ''
            })}
          </div>
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
  yomu: PropTypes.object.isRequired,
  meaning: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
}

WordItem.defaultProps = {
  character: '',
  level: '',
  kana: '',
  meaning: '',
  tags: []
}

export default WordItem
