import { combineReducers } from 'redux'
import gardens from './gardensReducer'
import plants from './plantsReducer'

export default combineReducers({ gardens, plants })