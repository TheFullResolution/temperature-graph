import { bool, func, object } from 'prop-types'
import React, { Component } from 'react'
import { Error } from '../Error/Error'
import { Loader } from '../Loader/Loader'
import { Page } from '../Page/Page'
import { connect } from 'react-redux'
import { openWeatherActions } from '../../store/openWeather/openWeatherActions'

class AppClass extends Component {
  componentDidMount() {
    this.props.fetchTemprature()
  }
  render() {
    const { error, loading } = this.props
    if (loading) return <Loader />
    else if (error) return <Error />
    return <Page />
  }
}

AppClass.propTypes = {
  error: object,
  fetchTemprature: func.isRequired,
  loading: bool.isRequired
}

const mapStateToProps = state => ({
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
