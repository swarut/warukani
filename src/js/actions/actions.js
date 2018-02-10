export const AUTHENTICATE = 'AUTHENTICATE'
export const authenticate = (token, username) => {
  return {
    type: AUTHENTICATE,
    token,
    username
  }
}

export const FETCH_USER_INFORMATION = 'FETCH_USER_INFORMATION'
export const fetchUserInformation = () => {
  return {
    type: FETCH_USER_INFORMATION
  }
}

export const RECEIVED_USER_INFORMATION = 'RECEIVED_USER_INFORMATION'
export const receivedUserInformation = (userInformation) => {
  return {
    type: RECEIVED_USER_INFORMATION,
    userInformation: userInformation
  }
}

export const ERROR_INVALID_TOKEN = 'ERROR_INVALID_TOKEN'

export const RECIEVED_VOCABS = 'RECIEVED_VOCABS'
