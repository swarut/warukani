import React from 'react'
// import WordItem from './WordItem'
// import TextField from 'material-ui/TextField'
// import RaisedButton from 'material-ui/RaisedButton'
import { connect } from 'react-redux'

class Practice extends React.Component {
  render() {
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
    search: (keyword) => {

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Practice)
