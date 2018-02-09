const user = (state = {username: null, token: null}, action) => {
  switch(action.type) {
    case 'AUTHENTICATE':
      return Object.assign({}, state, {
        token: action.token,
        username: action.username
      })
    case 'FETCH_USER_INFORMATION':
      return Object.assign({}, state, {
        level_progess: action.level
      })
    case 'RECEIVED_USER_INFORMATION':
      return Object.assign({}, state, {
        level_progess: action.level
      })
    default:
      return state
  }
}

export default user
