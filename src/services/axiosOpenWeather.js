import axios from 'axios'

const API = '2572256cbda74d86386b9d5386738c38'
const BERLIN_ID = 2950159

const axiosOpenWeather = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather'
})

axiosOpenWeather.interceptors.request.use(config => ({
  ...config,
  headers: {
    ...config.headers
  },
  params: {
    id: BERLIN_ID,
    units: 'metric',
    APPID: API
  }
}))

export { axiosOpenWeather }
