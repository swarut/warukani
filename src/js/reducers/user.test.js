import user from './user'

import {
  authenticate,
  fetchUserInformation,
  receivedUserInformation
} from '../actions/actions'

describe('user reducer', () => {
  test('updates token and username for authenticate action', () => {
    let action = authenticate('token', 'username')
    let updatedState = user({}, action)
    expect(updatedState).not.toBeNull()
    expect(updatedState.token).toBe('token')
    expect(updatedState.username).toBe('username')
  })

  test('updates fetching status for fetch user information action', () => {
    let action = fetchUserInformation()
    let updatedState = user({}, action)
    expect(updatedState).not.toBeNull()
    expect(updatedState.isFetching).toBe(true)
  })

  test('updates user information for received user information action', () => {
    let action = receivedUserInformation('info')
    let updatedState = user({}, action)
    expect(updatedState).not.toBeNull()
    expect(updatedState.userInformation).toBe('info')
    expect(updatedState.isFetching).toBe(false)
    expect(updatedState.wasFetched).toBe(true)
  })

})
