import { axiosOpenWeather } from '../../services/axiosOpenWeather'
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

        dispatch({
          type: SET_CURRENT_TEMPERATURE,
          payload: response.data.main.temp
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
