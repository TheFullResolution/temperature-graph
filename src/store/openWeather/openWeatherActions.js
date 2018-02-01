import { axiosOpenWeather } from '../../services/axiosOpenWeather'
import { SET_CURRENT_TEMPERATURE } from './openWeatherTypes'

export const openWeatherActions = {
  fetchTemperature() {
    return async dispatch => {
      const response = await axiosOpenWeather.get()

      dispatch({
        type: SET_CURRENT_TEMPERATURE,
        payload: response.data.main.temp
      })
    }
  }
}
