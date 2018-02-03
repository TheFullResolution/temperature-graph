import { axiosOpenWeather } from '../../helpers/axiosOpenWeather'
import {
  SET_CURRENT_TEMPERATURE,
  SET_FETCH_ERROR,
  SET_LOADING
} from './openWeatherTypes'

export const openWeatherActions = {
  fetchTemperature() {
    return async dispatch => {
      dispatch({ type: SET_LOADING, payload: true })
      try {
        const response = await axiosOpenWeather.get()
        const roundedResponse = Math.round(response.data.main.temp)

        dispatch({
          type: SET_CURRENT_TEMPERATURE,
          payload: roundedResponse
        })
      } catch (error) {
        dispatch({
          type: SET_FETCH_ERROR,
          payload: error
        })
      }
    }
  }
}
