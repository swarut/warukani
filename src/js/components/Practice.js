import React from 'react'
// import WordItem from './WordItem'
// import TextField from 'material-ui/TextField'
// import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { selectWords } from '../actions/vocabActions'

class Practice extends React.Component {
  componentDidMount() {
    this.props.getSelectedWords()
  }

  render() {
    console.log('---', this.props.selectedWords)
    return (
      <div className='practice'>
        <div className='practice-wraper'>
          <div className='question'>
            Advanced
          </div>
          <div className='answer'>

          </div>
          <div className='solutions'>

          </div>
        </div>
      </div>
    )
  }
}

Practice.propTypes = {}
const mapStateToProps = (state, ownProps) => {
  return {
    selectedWords: state.vocabs.selectedWords
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSelectedWords: (keyword) => {
      dispatch(selectWords())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Practice)
