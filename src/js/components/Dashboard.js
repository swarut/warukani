import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import WordItem from './WordItem'
import TextField from 'material-ui/TextField'
import { searchVocab } from '../actions/verbActions'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.search = this.search.bind(this)
    this.onChange = this.onChange.bind(this)
  }
  onChange(e) {
    this.setState({ keyword: e.target.value })
  }
  search() {
    this.props.search(this.state.keyword)
  }
  render() {
    return (
      <div className='dashboard'>
        <div className='practice-wraper'>
          <div className='question'>
            Lookup
          </div>
          <div className='answer'>
            <TextField hintText='yomi or reading' floatingLabelText='Keyword' onChange={this.onChange}/>
            <RaisedButton label=">" className='go-button' onClick={this.search} />
          </div>
          <div className='solutions'>
            <WordItem />
          </div>
        </div>
      </div>
    )
  }

}
Dashboard.propTypes = {}
const mapStateToProps = (state, ownProps) => {
  return {
    keyword: state.vocabs.keyword
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    search: (keyword) => {
      console.log("search click")
      dispatch(searchVocab(keyword))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
