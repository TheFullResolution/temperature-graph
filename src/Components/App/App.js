import * as style from './App.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { openWeatherActions } from '../../store/openWeather/openWeatherActions'
import { Loader } from '../Loader/Loader'
import { Error } from '../Error/Error'

class AppClass extends Component {
  componentDidMount() {
    this.props.fetchTemprature()
  }
  render() {
    const { error, loading, currentTemp } = this.props
    if (loading) return <Loader />
    else if (error) return <Error />
    return (
      <div className={style.container}>
        <header>
          <h1 className={style.header}>Temprature Graph App</h1>
        </header>
        <p>Berlin Temprature: {currentTemp}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentTemp: state.openWeather.data,
  error: state.openWeather.error,
  loading: state.openWeather.loading
})

const mapDispatchToProps = dispatch => {
  return {
    fetchTemprature: () => {
      dispatch(openWeatherActions.fetchTemperature())
    }
  }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppClass)
