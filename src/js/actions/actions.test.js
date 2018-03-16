import {
  authenticate,
  AUTHENTICATE,
  fetchUserInformation,
  FETCH_USER_INFORMATION,
  receivedUserInformation,
  RECEIVED_USER_INFORMATION,
  updateSetting,
  UPDATE_SETTING
} from './actions'

describe('actions', () => {
  test('authenticate returns the right action', () => {
    let authenticateAction = authenticate('token', 'username')
    expect(authenticateAction).not.toBeNull()
    expect(authenticateAction.type).toBe(AUTHENTICATE)
    expect(authenticateAction.token).toBe('token')
    expect(authenticateAction.username).toBe('username')
  })

  test('fetchUserInformation returns the right action', () => {
    let fetchUserInformationAction = fetchUserInformation()
    expect(fetchUserInformationAction).not.toBeNull()
    expect(fetchUserInformationAction.type).toBe(FETCH_USER_INFORMATION)
  })

  test('receivedUserInformation returns the right action', () => {
    let receivedUserInformationAction = receivedUserInformation()
    expect(receivedUserInformationAction).not.toBeNull()
    expect(receivedUserInformationAction.type).toBe(RECEIVED_USER_INFORMATION)
  })

  test('updateSetting returns the right action', () => {
    let updateSettingAction = updateSetting()
    expect(updateSettingAction).not.toBeNull()
    expect(updateSettingAction.type).toBe(UPDATE_SETTING)
  })

})
