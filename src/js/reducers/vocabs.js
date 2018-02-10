import { RECIEVED_VOCABS } from '../actions/actions'
const vocabs = (state = {}, action) => {
  switch(action.type) {
    case RECIEVED_VOCABS:
      return Object.assign({}, state, {
        [action.level]: action.vocabs
      })
    default:
      return state
  }
}

export default vocabs
