import React from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import WordItem from './WordItem'
import TextField from 'material-ui/TextField'
import { searchVocab, clearSearch } from '../actions/verbActions'
import _ from 'lodash'

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.search = this.search.bind(this)
    this.onChange = this.onChange.bind(this)
    this.renderResult = this.renderResult.bind(this)
    this.debounceSearch = _.debounce((keyword) => {
      if(keyword.length >= 3) {
        this.props.search(keyword)
      }
    }, 2000)
  }

  componentWillUnmount() {
    this.props.clearSearch();
  }

  onChange(e) {
    let keyword = e.target.value
    this.setState({ keyword: keyword }, this.debounceSearch(keyword))
  }

  search() {
    this.props.search(this.state.keyword)
  }

  renderResult() {
    if(this.props.searchResult.length !== 0) {
      return this.props.searchResult.map((vocab) => {
        let tags = vocab.user_specific ? vocab.user_specific.user_synonyms || [] : []
        let yomu = {}
        if(vocab.type === 'vocab') {
          yomu = {kana: vocab.kana}
        }
        else if(vocab.type === 'kanji') {
          yomu = {onyomi: vocab.onyomi, kunyomi: vocab.kunyomi, nanoni: vocab.nanoni}
        }
        return <WordItem
          key={`${vocab.type}-${vocab.level}-${vocab.character}`}
          character={vocab.character}
          level={vocab.level + ''}
          yomu={yomu}
          meaning={vocab.meaning}
          tags={tags}
        />
      })
    }
  }

  render() {
    return (
      <div className='dashboard'>
        <div className='practice-wrapper'>
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
      dispatch(searchVocab(keyword))
    },
    clearSearch: () => {
      dispatch(clearSearch())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
