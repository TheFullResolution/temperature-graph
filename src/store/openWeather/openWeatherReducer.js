import {
  SET_CURRENT_TEMPERATURE,
  SET_FETCH_ERROR,
  SET_LOADING
} from './openWeatherTypes'
import update from 'immutability-helper'

const defaultState = {
  data: null,
  loading: false,
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_TEMPERATURE:
      return update(state, {
        data: { $set: action.payload },
        loading: { $set: false }
      })
    case SET_FETCH_ERROR:
      return update(state, {
        error: { $set: action.payload },
        loading: { $set: false }
      })
    case SET_LOADING:
      return update(state, {
        loading: { $set: action.payload }
      })
    default:
      return state
  }
}
