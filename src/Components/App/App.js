import * as style from './App.scss'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {openWeatherActions} from '../../store/openWeather/openWeatherActions'

class AppClass extends Component {
  componentDidMount() {
    this.props.fetchTemprature()
  }
  render() {
    return (
      <div className={style.container}>
        <header>
          <h1 className={style.header}>Temprature Graph App</h1>
        </header>
        <p>
          Berlin Temprature: {this.props.currentTemp}
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentTemp: state.openWeather
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTemprature: () => {
      dispatch(openWeatherActions.fetchTemperature())
    }
  }
}

export const App = connect(mapStateToProps, mapDispatchToProps)(AppClass)
