import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import gardens from './reducers/gardensReducer'
import plants from './reducers/plantsReducer'

const rootReducer = combineReducers({
  gardens,
  plants
})

export default createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ))