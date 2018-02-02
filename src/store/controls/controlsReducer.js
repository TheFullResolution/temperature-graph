import { SET_TIMEOUT, SET_MAX, SET_MIN } from './controlsTypes'
import update from 'immutability-helper'

const defaultState = {
  timeout: 3000,
  max: 30,
  min: 10
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_TIMEOUT:
      return update(state, {
        timeout: { $set: action.payload }
      })
    case SET_MAX:
      return update(state, {
        max: { $set: action.payload }
      })
    case SET_MIN:
      return update(state, {
        min: { $set: action.payload }
      })
    default:
      return state
  }
}
