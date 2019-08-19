import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import gardens from './reducers/gardensReducer'
import plants from './reducers/plantsReducer'
import strains from './reducers/strainsReducer'

const rootReducer = combineReducers({
  gardens,
  plants,
  strains
})

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ))