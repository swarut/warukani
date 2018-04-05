import axios from 'axios'

export const FETCH_ALL_VOCABS = 'FETCH_ALL_VOCABS'
export const fetchAllVocabs = () => {
  return {
    type: FETCH_ALL_VOCABS
  }
}

export const RECEIVED_ALL_VOCABS = 'RECEIVED_ALL_VOCABS'
export const receivedAllVocabs = (vocabType, allVocabs, vocabsLookUp = null) => {
  return {
    type: RECEIVED_ALL_VOCABS,
    allVocabs: allVocabs,
    vocabType: vocabType,
    vocabsLookUp: vocabsLookUp
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
      let idCounter = 0
      let lookUp = {}
      results.forEach((result) => {
        let typeWrappedResult = result.result.map((res) => {
          res.type = result.type
          res.id = idCounter

          let key1 = res.meaning.replace(' ', '').slice(0, 3)
          let key2 = res.meaning.replace(' ', '').slice(0, 4)
          let key3 = res.meaning.replace(' ', '').slice(0, 5)
          let key4 = res.meaning.replace(' ', '').slice(0, 6)
          let keys = [key1, key2, key3, key4]
          keys.forEach((key) => {
            if(!lookUp[key]) {
              lookUp[key] = [idCounter]
            }
            else {
              lookUp[key].push(idCounter)
            }
          })

          idCounter = idCounter + 1

          return res
        })
        allVocabs = allVocabs.concat(typeWrappedResult)
      })
      let storage = window.localStorage
      storage.setItem('vocabs', JSON.stringify(allVocabs))
      storage.setItem('vocabs_lookup', JSON.stringify(lookUp))
      dispatch(receivedAllVocabs("vocabs", allVocabs, lookUp))
    })
  }
}
