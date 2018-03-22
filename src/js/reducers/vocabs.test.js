import '../windowMock'
import vocabs from './vocabs'

import {
  fetchVocabs
} from '../actions/verbActions'

// window.localStorage = jest.fn()

describe('vocab reducer', () => {
  // beforeAll(() => {
  //   var localStorageMock = () => {
  //     let store = {}
  //     return {
  //       getItem: (key) => {
  //         return store[key] || null
  //       },
  //       setItem: (key, value) => {
  //         store[key] = value.toString()
  //       },
  //       clear: () => {
  //         store = {}
  //       }
  //     }
  //   }
  //
  //   Object.defineProperty(window, 'localStorage', {
  //     value: localStorageMock
  //   });
  // })

  test('updates fetching status for fetch vocabs action', () => {
    let action = fetchVocabs(1)
    let updatedState = vocabs({}, action)
    expect(updatedState).not.toBeNull()
    expect(updatedState.isFetching).toBe(true)
  })


})
