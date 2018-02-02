import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import openWeather from './openWeather/openWeatherReducer'
import controls from './controls/controlsReducer'

const rootReducer = combineReducers({openWeather, controls})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
