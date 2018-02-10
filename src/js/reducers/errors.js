import { ERROR_INVALID_TOKEN } from '../actions/actions'

const defaultStates = {
  invalid_token: false
}
const errors = (state = defaultStates, action) => {
  switch(action.type) {
    case ERROR_INVALID_TOKEN:
      return Object.assign({}, state, {
        invalid_token: true
      })
    default:
      return state
  }
}

export default errors
