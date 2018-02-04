const authenticate = token => {
  return {
    type: 'AUTHENTICATE',
    token
  }
}

export default authenticate
