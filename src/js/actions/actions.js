const authenticate = (token, username) => {
  return {
    type: 'AUTHENTICATE',
    token,
    username
  }
}

const fetch_user_information = () => {
  return {
    type: 'FETCH_USER_INFORMATION'
  }
}

const received_user_information = (userInformation) => {
  return {
    type: 'RECEIVED_USER_INFORMATION',
    user_information: userInformation
  }
}

// export default { authenticate, fetch_user_information, received_user_information }
module.exports = { authenticate, fetch_user_information, received_user_information }
