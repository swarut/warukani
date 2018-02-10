export const AUTHENTICATE = 'AUTHENTICATE'
export const authenticate = (token, username) => {
  return {
    type: AUTHENTICATE,
    token,
    username
  }
}

export const FETCH_USER_INFORMATION = 'FETCH_USER_INFORMATION'
export const fetch_user_information = () => {
  return {
    type: FETCH_USER_INFORMATION
  }
}

export const RECEIVED_USER_INFORMATION = 'RECEIVED_USER_INFORMATION'
export const received_user_information = (userInformation) => {
  return {
    type: RECEIVED_USER_INFORMATION,
    user_information: userInformation
  }
}
