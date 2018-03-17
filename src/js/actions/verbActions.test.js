import {
  fetchVocabs,
  FETCH_VOCABS,
  fetchAllVocabs,
  FETCH_ALL_VOCABS,
  receivedVocabs,
  RECEIVED_VOCABS,
  receivedAllVocabs,
  RECEIVED_ALL_VOCABS,
  increaseVocabsProgress,
  INCREASE_VOCABS_PROGRESS,
  searchVocab,
  SEARCH_VOCAB,
  clearSearch,
  CLEAR_SEARCH
} from './verbActions'

describe('actions', () => {
  test('fetchVocabs returns the right action', () => {
    let fetchVocabsAction = fetchVocabs(1)
    expect(fetchVocabsAction).not.toBeNull()
    expect(fetchVocabsAction.type).toBe(FETCH_VOCABS)
    expect(fetchVocabsAction.level).toBe(1)
  })

  test('fetchAllVocabs returns the right action', () => {
    let fetchAllVocabsAction = fetchAllVocabs()
    expect(fetchAllVocabsAction).not.toBeNull()
    expect(fetchAllVocabsAction.type).toBe(FETCH_ALL_VOCABS)
  })

  test('receivedVocabs returns the right action', () => {
    let receivedVocabsAction = receivedVocabs('vocab', 1, 'requestInfo')
    expect(receivedVocabsAction).not.toBeNull()
    expect(receivedVocabsAction.type).toBe(RECEIVED_VOCABS)
    expect(receivedVocabsAction.level).toBe(1)
    expect(receivedVocabsAction.vocabType).toBe('vocab')
    expect(receivedVocabsAction.requestedInformation).toBe('requestInfo')
  })

  test('receivedAllVocabs returns the right action', () => {
    let receivedAllVocabsAction = receivedAllVocabs('vocab', 'allVocabs')
    expect(receivedAllVocabsAction).not.toBeNull()
    expect(receivedAllVocabsAction.type).toBe(RECEIVED_ALL_VOCABS)
    expect(receivedAllVocabsAction.vocabType).toBe('vocab')
    expect(receivedAllVocabsAction.allVocabs).toBe('allVocabs')
  })

  test('increaseVocabsProgress returns the right action', () => {
    let increaseVocabsProgressAction = increaseVocabsProgress()
    expect(increaseVocabsProgressAction).not.toBeNull()
    expect(increaseVocabsProgressAction.type).toBe(INCREASE_VOCABS_PROGRESS)
  })

  test('searchVocab returns the right action', () => {
    let searchVocabAction = searchVocab('keyword')
    expect(searchVocabAction).not.toBeNull()
    expect(searchVocabAction.type).toBe(SEARCH_VOCAB)
    expect(searchVocabAction.keyword).toBe('keyword')
  })

  test('clearSearch returns the right action', () => {
    let clearSearchAction = clearSearch()
    expect(clearSearchAction).not.toBeNull()
    expect(clearSearchAction.type).toBe(CLEAR_SEARCH)
  })

})
