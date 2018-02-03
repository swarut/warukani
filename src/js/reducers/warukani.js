const Warukani = (state = [], action) => {
  switch(action.type) {
    case 'AUTHENTICATE':
      return [
        ...state,
        {
          token: action.token
        }
      ]
    default:
      return state
  }
}

export default Warukani
