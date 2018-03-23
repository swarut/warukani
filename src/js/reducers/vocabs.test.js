import vocabs from './vocabs'

import {
  receivedAllVocabs,
  increaseVocabsProgress,
  searchVocab,
  clearSearch
} from '../actions/verbActions'

describe('vocab reducer', () => {

  test('update vocabs for received all vocabs action', () => {
    let action = receivedAllVocabs('verb', 'allvocabs')
    let updatedState = vocabs({}, action)
    expect(updatedState).not.toBeNull()
    expect(updatedState.isFetching).toBe(false)
    expect(updatedState.wasFetched).toBe(true)
    expect(updatedState.wasFetched).toBe(true)
    expect(updatedState.verb).toBe('allvocabs')
  })
  test('update progress for increase vocab progress action', () => {
    let action = increaseVocabsProgress()
    let updatedState = vocabs({progressCount: 0}, action)
    expect(updatedState).not.toBeNull()
    expect(updatedState.progressCount).toBe(1)
  })
  test('update keyword and search result for search vocab action', () => {
    let action = searchVocab('funassyi')
    let v1 = {id: 1, meaning: 'no'}
    let v2 = {id: 2, meaning: 'funassyi'}
    let updatedState = vocabs({vocabs: [v1, v2] }, action)
    expect(updatedState).not.toBeNull()
    expect(updatedState.keyword).toBe('funassyi')
    expect(updatedState.searchResult.length).toBe(1)
    expect(updatedState.searchResult[0].id).toBe(v2.id)
    expect(updatedState.searchResult[0].meaning).toBe(v2.meaning)
  })
  test('clear keyword and search result for clear search action', () => {
    let action = clearSearch()
    let updatedState = vocabs({}, action)
    expect(updatedState).not.toBeNull()
    expect(updatedState.keyword).toBeNull()
    expect(updatedState.searchResult.length).toBe(0)
  })
})
