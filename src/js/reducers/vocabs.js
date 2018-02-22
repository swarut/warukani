import { FETCH_VOCABS, RECEIVED_VOCABS, RECEIVED_ALL_VOCABS, INCREASE_VOCABS_PROGRESS } from '../actions/actions'

const defaultState = {
  isFetching: false,
  wasFetched: false,
  radicals: {},
  kanjis: {},
  vocabs: {},
  totalLevel: 40,
  progressCount: 0
}

const vocabs = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_VOCABS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVED_VOCABS:

      let newData = Object.assign({}, state[action.vocabType],{
        [action.level]: action.requestedInformation
      })

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
    default:
      return state
  }
}

export default vocabs
