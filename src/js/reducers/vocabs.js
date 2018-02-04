const vocabs = (state = {}, action) => {
  switch(action.type) {
    case 'RETRIEVED_VOCABS':
      return {
        ...state,
        [action.level]: action.vocabs
      }
    default:
      return state
  }
}

export default vocabs
