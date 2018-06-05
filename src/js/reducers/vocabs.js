import {
  RECEIVED_ALL_VOCABS,
  INCREASE_VOCABS_PROGRESS,
  SEARCH_VOCAB,
  CLEAR_SEARCH,
  SELECT_WORDS
} from '../actions/vocabActions'

const getVocabsFromStorage = () => {
  let storage = window.localStorage
  let vocabs = []
  if(storage) {
    vocabs = JSON.parse(storage.getItem('vocabs'))
  }
  return vocabs
}

const getVocabsLookUpFromStorage = () => {
  let storage = window.localStorage
  let vocabsLookUp = []
  if(storage) {
    vocabsLookUp = JSON.parse(storage.getItem('vocabs_lookup'))
  }
  return vocabsLookUp
}

const randomlySelectWords = (vocabs, amount) => {
  return vocabs.slice(0, amount)
}

const defaultState = {
  isFetching: false,
  wasFetched: false,
  radicals: [],
  kanjis: [],
  vocabs: getVocabsFromStorage(),
  vocabsLookUp: getVocabsLookUpFromStorage(),
  totalLevel: 40,
  progressCount: 0,
  keyword: null,
  searchResult: [],
  selectedWords: []
}

const vocabs = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVED_ALL_VOCABS:

      let updated = {
        [action.vocabType]: action.allVocabs,
        isFetching: false,
        wasFetched: true
      }
      if(action.vocabsLookUp) {
        updated.vocabsLookUp = action.vocabsLookUp
      }

      return Object.assign({}, state, updated)
    case INCREASE_VOCABS_PROGRESS:
      return Object.assign({}, state, {
        progressCount: state.progressCount + 1
      })
    case SEARCH_VOCAB:

      let result = []
      let vocabIds = state.vocabsLookUp[action.keyword]
      if(vocabIds) {
        result = vocabIds.map((ids) => {
          return state.vocabs[ids]
        })
      }

      if(result.length === 0) {
        result = state.vocabs.filter((vocab) => {
          return vocab.meaning === action.keyword
        })
      }

      return Object.assign({}, state, {
        keyword: action.keyword,
        searchResult: result
      })
    case CLEAR_SEARCH:
      return Object.assign({}, state, {
        keyword: defaultState.keyword,
        searchResult: defaultState.searchResult
      })
    case SELECT_WORDS:
      return Object.assign({}, state, {
        selectedWords: randomlySelectWords(state.vocabs, 10)
      })
    default:
      return state
  }
}

export default vocabs
