import { FETCH_VOCABS, RECEIVED_VOCABS } from '../actions/actions'
const vocabs = (state = {isFetching: false, wasFetched: false}, action) => {
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
