import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import openWeather from './openWeather/openWeatherReducer'

const rootReducer = combineReducers({openWeather})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
