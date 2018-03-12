import {
  FETCH_VOCABS,
  RECEIVED_VOCABS,
  RECEIVED_ALL_VOCABS,
  INCREASE_VOCABS_PROGRESS,
  SEARCH_VOCAB,
  CLEAR_SEARCH
} from '../actions/verbActions'

const getVocabsFromStorage = () => {
  let storage = window.localStorage
  let vocabs = JSON.parse(storage.getItem('vocabs'))
  if(vocabs) {
    return vocabs
  }
  return []
}

const defaultState = {
  isFetching: false,
  wasFetched: false,
  radicals: [],
  kanjis: [],
  vocabs: getVocabsFromStorage(),
  totalLevel: 40,
  progressCount: 0,
  keyword: null,
  searchResult: []
}

const vocabs = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_VOCABS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVED_VOCABS:

      let newData = state[action.vocabType].concat(action.requestedInformation)

      return Object.assign({}, state, {
        [action.vocabType]: newData,
        isFetching: false,
        wasFetched: true
      })
    case RECEIVED_ALL_VOCABS:
      return Object.assign({}, state, {
        [action.vocabType]: action.allVocabs,
        isFetching: false,
        wasFetched: true
      })
    case INCREASE_VOCABS_PROGRESS:
      return Object.assign({}, state, {
        progressCount: state.progressCount + 1
      })
    case SEARCH_VOCAB:
      let vocabs = state.vocabs.filter((vocab) => {
        return vocab.meaning === action.keyword
      })
      return Object.assign({}, state, {
        keyword: action.keyword,
        searchResult: vocabs
      })
    case CLEAR_SEARCH:
      return Object.assign({}, state, {
        keyword: defaultState.keyword,
        searchResult: defaultState.searchResult
      })
    default:
      return state
  }
}

export default vocabs
