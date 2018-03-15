import {
  authenticate,
  AUTHENTICATE
} from '../src/actions/actions'

describe('actions', () => {
  test('authenticate returns action type authenticate', () => {
    let authenticateAction = authenticate('token', 'username')
    expect(authenticateAction).not.toBeNull();
    expect(authenticateAction).toBeDefined();
    expect(authenticateAction.type).toBe(AUTHENTICATE)
    expect(authenticateAction.token).toBe('token')
    expect(authenticateAction.username).toBe('username')
  })

})
