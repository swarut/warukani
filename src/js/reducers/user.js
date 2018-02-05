const user = (state = {username: null, token: null}, action) => {
  switch(action.type) {
    case 'AUTHENTICATE':
      return Object.assign({}, state, {
        token: action.token,
        username: action.username
      })
    default:
      return state
  }
}

export default user
