const authenticate = token => {
  return {
    type: 'AUTHENTICATE',
    token
  }
}
