import { FETCH_VOCABS, RECEIVED_VOCABS } from '../actions/actions'

const defaultState = {
  isFetching: false,
  wasFetched: false,
  radicals: {},
  kanjis: {},
  vocabs: {},
}

const vocabs = (state = defaultState, action) => {
  switch(action.type) {
    case FETCH_VOCABS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVED_VOCABS:
      return Object.assign({}, state, {
        [action.level]: action.requestedInformation,
        isFetching: false,
        wasFetched: true
      })
    default:
      return state
  }
}

export default vocabs
