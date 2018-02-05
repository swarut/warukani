const authenticate = (token, username) => {
  return {
    type: 'AUTHENTICATE',
    token,
    username
  }
}

export default authenticate
