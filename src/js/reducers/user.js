import {
  AUTHENTICATE,
  FETCH_USER_INFORMATION,
  RECEIVED_USER_INFORMATION,
  UPDATE_SETTING
} from '../actions/actions'

const defaultState = {
  username: null,
  token: null,
  user_information: {},
  isFetching: false,
  wasFetched: false,
  theme: 'warutheme',
  font: 'default'
}

const user = (state = defaultState, action) => {
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
    case UPDATE_SETTING:
      return Object.assign({}, state, {
        key: action.key,
        value: action.value
      })
    default:
      return state
  }
}

export default user
