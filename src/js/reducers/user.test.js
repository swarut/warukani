import user from './user'

import {
  authenticate
} from '../actions/actions'

describe('actions', () => {
  test('fetchVocabs returns the right action', () => {
    let action = authenticate('token', 'username')
    let userResult = user({}, action)
    expect(userResult).not.toBeNull()
    expect(userResult.token).toBe('token')
    expect(userResult.username).toBe('username')
  })

})
