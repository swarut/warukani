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
    console.log('componentDidMount')
    this.props.getSelectedWords()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps - prevState', prevState)
    console.log('getDerivedStateFromProps - nextProps', nextProps)
    return {
      size: nextProps.selectedWords.length,
      name: 'taiko'
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('component did update - prev props', prevProps)
    console.log('component did update - prev state', prevState)
    console.log('component did update - current props', this.props.selectedWords)
    console.log('component did update - current state', this.state)
    // this.setState({ size: this.props.selectedWords.length })
    console.log('------------------------------------')
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate --------------[][][][][][]')
    return null
  }

  render() {
    console.log('--- selectedwords', this.props.selectedWords)
    console.log('---state', this.state)
    console.log('--------')
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
  console.log('mapStateToProps----> new propppppsss')
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
