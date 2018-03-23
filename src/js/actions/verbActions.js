import axios from 'axios'

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

export const SEARCH_VOCAB = 'SEARCH_VOCAB'
export const searchVocab = (keyword) => {
  return {
    type: SEARCH_VOCAB,
    keyword: keyword
  }
}

export const CLEAR_SEARCH = 'CLEAR_SEARCH'
export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  }
}

export const fetchVocabsOfAllLevels = (token, numberOfLevel) => {
  return (dispatch) => {
    dispatch(fetchAllVocabs())
    let promises = []
    for(let level = 1; level <= numberOfLevel; level++) {
      let loadVocab = new Promise((resolve, reject) => {
        let url = `https://www.wanikani.com/api/user/${token}/vocabulary/${level}`
        return axios.get(url).then((response) => {
          dispatch(increaseVocabsProgress())
          resolve({ type: 'vocab', key: level, result: response.data.requested_information})
        })
      })
      promises.push(loadVocab)
      let loadKanji = new Promise((resolve, reject) => {
        let url = `https://www.wanikani.com/api/user/${token}/kanji/${level}`
        return axios.get(url).then((response) => {
          dispatch(increaseVocabsProgress())
          resolve({ type: 'kanji', key: level, result: response.data.requested_information})
        })
      })
      promises.push(loadKanji)
    }
    Promise.all(promises).then((results) => {
      let allVocabs = []

      results.forEach((result) => {
        let typeWrappedResult = result.result.map((res) => {
          res.type = result.type
          return res
        })
        allVocabs = allVocabs.concat(typeWrappedResult)
      })
      let storage = window.localStorage
      storage.setItem('vocabs', JSON.stringify(allVocabs))
      dispatch(receivedAllVocabs("vocabs", allVocabs))
    })
  }
}
