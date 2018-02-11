import { AUTHENTICATE, FETCH_USER_INFORMATION, RECEIVED_USER_INFORMATION } from '../actions/actions'

const user = (state = {username: null, token: null, user_information: {}, isFetching: false, wasFetched: false}, action) => {
  switch(action.type) {
    case AUTHENTICATE:
      return Object.assign({}, state, {
        token: action.token,
        username: action.username
      })
    case FETCH_USER_INFORMATION:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVED_USER_INFORMATION:
      return Object.assign({}, state, {
        userInformation: action.userInformation,
        isFetching: false,
        wasFetched: true
      })
    default:
      return state
  }
}

export default user
