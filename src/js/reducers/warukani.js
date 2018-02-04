import { combineReducers } from 'redux'
import user from './user'
import errors from './errors'

const Warukani = combineReducers({
  user,
  errors
})

export default Warukani
