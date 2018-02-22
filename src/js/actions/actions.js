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

export const FETCH_ALL_VOCABS = 'FETCH_ALL_VOCABS'
export const fetchAllVocabs = () => {
  return {
    type: FETCH_ALL_VOCABS
  }
}

export const RECEIVED_VOCABS = 'RECEIVED_VOCABS'
export const receivedVocabs = (vocabType, level, requestedInformation) => {
  return {
    type: RECEIVED_VOCABS,
    level: level,
    vocabType: vocabType,
    requestedInformation: requestedInformation
  }
}

export const RECEIVED_ALL_VOCABS = 'RECEIVED_ALL_VOCABS'
export const receivedAllVocabs = (vocabType, allVocabs) => {
  return {
    type: RECEIVED_ALL_VOCABS,
    allVocabs: allVocabs,
    vocabType: vocabType
  }
}

export const INCREASE_VOCABS_PROGRESS = 'INCREASE_VOCABS_PROGRESS'
export const increaseVocabsProgress = () => {
  return {
    type: INCREASE_VOCABS_PROGRESS
  }
}


export const fetchRadicalsOfLevel = (level, token) => {
  return (dispatch) => {
    dispatch(fetchVocabs(level))
    let url = `https://www.wanikani.com/api/user/${token}/radicals/${level}`
    console.log("url", url)
    return axios.get(url)
    .then((response) => {
      console.log("------- receive radical", response)
      dispatch(receivedVocabs("radical", level, response.data.requested_information))
    })
    .catch((error) => {
      console.log("error on fetching kanji")
    })
  }
}

export const fetchKanjisOfLevel = (level, token) => {
  return (dispatch) => {
    dispatch(fetchVocabs(level))
    let url = `https://www.wanikani.com/api/user/${token}/kanji/${level}`
    console.log("url", url)
    return axios.get(url)
    .then((response) => {
      console.log("------- receive kanji", response)
      dispatch(receivedVocabs("kanji", level, response.data.requested_information))
    })
    .catch((error) => {
      console.log("error on fetching kanji")
    })
  }
}

export const fetchVocabsOfLevel = (level, token) => {
  return (dispatch) => {
    dispatch(fetchVocabs(level))
    let url = `https://www.wanikani.com/api/user/${token}/vocabulary/${level}`

    return axios.get(url)
    .then((response) => {
      dispatch(receivedVocabs("vocabs", level, response.data.requested_information))
    })
    .catch((error) => {
      console.log("error on fetching vocabs")
    })
  }
}

export const fetchVocabsOfAllLevels = (token) => {
  return (dispatch) => {
    dispatch(fetchAllVocabs())
    let promises = []
    for(let i = 0; i < 40; i++) {
      let promise = new Promise((resolve, reject) => {
        let url = `https://www.wanikani.com/api/user/${token}/vocabulary/${i}`
        return axios.get(url).then((response) => {
          dispatch(increaseVocabsProgress())
          resolve({ key: i, result: response.data.requested_information})
        })
      })
      promises.push(promise)
    }
    Promise.all(promises).then((results) => {
      let o = {}
      results.forEach((result) => {
        o[result.key] = result.result
      })

      dispatch(receivedAllVocabs("vocabs", o))
    })
  }
}
