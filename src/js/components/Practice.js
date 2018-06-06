import React from 'react'
// import WordItem from './WordItem'
// import TextField from 'material-ui/TextField'
// import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'
import { selectWords } from '../actions/vocabActions'

class Practice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
      size: props.selectedWords.length
    }
  }

  componentDidMount() {
    this.props.getSelectedWords()
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps - props', props)
    console.log('getDerivedStateFromProps - state', state)
    state.size = props.selectedWords.length()
    return state
  }

  render() {
    console.log('---', this.props.selectedWords)
    console.log('---state', this.state)
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
