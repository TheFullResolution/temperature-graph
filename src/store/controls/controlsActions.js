import { SET_TIMEOUT, SET_MAX, SET_MIN } from './controlsTypes'

export const controlsActions = {
  updateTimeout(value) {
    return dispatch => {
      dispatch({
        type: SET_TIMEOUT,
        payload: value
      })
    }
  },
  updateMax(value) {
    return dispatch => {
      dispatch({
        type: SET_MAX,
        payload: value
      })
    }
  },
  updateMin(value) {
    return dispatch => {
      dispatch({
        type: SET_MIN,
        payload: value
      })
    }
  }
}
