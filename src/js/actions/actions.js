import axios from 'axios'

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


export const FETCH_VOCABS = 'FETCH_VOCABS'
export const fetchVocabs = (level) => {
  return {
    type: FETCH_VOCABS,
    level: level
  }
}

export const RECEIVED_VOCABS = 'RECEIVED_VOCABS'
export const receivedVocabs = (level, requestedInformation) => {
  return {
    type: RECEIVED_VOCABS,
    level: level,
    requestedInformation: requestedInformation
  }
}

export const fetchVocabsOfLevel = (level, token) => {
  return (dispatch) => {
    dispatch(fetchVocabs(level))
    let url = `https://www.wanikani.com/api/user/${token}/vocabulary/${level}`
    console.log("url", url)
    return axios.get(url)
    .then((response) => {
      console.log("------- receive vocabs", response)
      dispatch(receivedVocabs(level, response.data.requested_information))
    })
    .catch((error) => {
      console.log("error on fetching vocabs")
    })
  }
}
