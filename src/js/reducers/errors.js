const Errors = (state = [], action) => {
  switch(action.type) {
    case 'ERROR.INVALID_TOKEN':
      return [
        ...state,
        { invalid_token: true }
      ]
    default:
      return state
  }
}

export default Errors
