import { SET_CURRENT_TEMPERATURE } from './openWeatherTypes'

export default (state = null, action)  => {
  switch (action.type) {
    case SET_CURRENT_TEMPERATURE:
      return action.payload || false
    default:
      return state
  }
}
