import { combineReducers } from 'redux'
import User from './user'
import Errors from './errors'

const Warukani = combineReducers({
  User,
  Errors
})

export default Warukani
