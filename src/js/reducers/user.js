const User = (state = [], action) => {
  switch(action.type) {
    case 'AUTHENTICATE':
      return [
        ...state,
        {
          token: action.token,
          username: action.username
        }
      ]
    default:
      return state
  }
}

export default User
