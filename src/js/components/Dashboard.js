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
    this.renderResult = this.renderResult.bind(this)
  }

  onChange(e) {
    this.setState({ keyword: e.target.value })
  }

  search() {
    this.props.search(this.state.keyword)
  }

  renderResult() {
    if(this.props.searchResult.length !== 0) {
      return this.props.searchResult.map((vocab) => {
        return <WordItem
          key={`${vocab.level}-${vocab.character}`}
          character={vocab.character}
          level={vocab.level + ''}
          kana={vocab.kana}
          meaning={vocab.meaning}
          tags={vocab.user_specific.user_synonyms || []}
        />
      })
    }
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
            {this.renderResult()}
          </div>
        </div>
      </div>
    )
  }

}
Dashboard.propTypes = {}
const mapStateToProps = (state, ownProps) => {
  return {
    keyword: state.vocabs.keyword,
    searchResult: state.vocabs.searchResult
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
