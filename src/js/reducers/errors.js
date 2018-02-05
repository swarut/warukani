const defaultStates = {
  invalid_token: false
}
const errors = (state = defaultStates, action) => {
  switch(action.type) {
    case 'ERROR.INVALID_TOKEN':
      return Object.assign({}, state, {
        invalid_token: true
      })
    default:
      return state
  }
}

export default errors
