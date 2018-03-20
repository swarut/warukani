import vocabs from './vocabs'

import {
  fetchVocabs
} from '../actions/verbActions'

window.localStorage = jest.fn()

describe('vocab reducer', () => {
  test('updates fetching status for fetch vocabs action', () => {
    let action = fetchVocabs(1)
    let updatedState = vocabs({}, action)
    expect(updatedState).not.toBeNull()
    expect(updatedState.isFetching).toBe(true)
  })


})
