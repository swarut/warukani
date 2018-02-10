import { AUTHENTICATE, FETCH_USER_INFORMATION, RECEIVED_USER_INFORMATION } from '../actions/actions'

const user = (state = {username: null, token: null, user_information: {}}, action) => {
  switch(action.type) {
    case AUTHENTICATE:
      return Object.assign({}, state, {
        token: action.token,
        username: action.username
      })
    case FETCH_USER_INFORMATION:
      return Object.assign({}, state, {

      })
    case RECEIVED_USER_INFORMATION:
      return Object.assign({}, state, {
        user_information: action.user_information
      })
    default:
      return state
  }
}

export default user
