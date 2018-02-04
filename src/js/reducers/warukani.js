import { combineReducers } from 'redux'
import user from './user'
import vocabs from './vocabs'
import errors from './errors'

const Warukani = combineReducers({
  user,
  vocabs,
  errors
})

export default Warukani
