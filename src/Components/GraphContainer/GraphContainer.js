import * as style from './GraphContainer.scss'

import React, { Component, Fragment } from 'react'
import { Graph } from './Graph/Graph'
import { connect } from 'react-redux'
import { number } from 'prop-types'

export const getRandomTemperature = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

class GraphContainerClass extends Component {
  state = { timeout: this.props.timeout, newTemprature: 0 }
  componentWillReceiveProps(nextProps) {
    if (nextProps.timeout !== this.props.timeout)
      this.setState(() => ({
        timeout: nextProps.timeout
      }))
  }
  componentDidMount() {
    this.startTheInterval()
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    const { currentTemp } = this.props
    const {newTemprature, timeout} = this.state
    return (
      <Fragment>
        <p className={style.paragraph}>New Temperature in {timeout}s</p>
        <Graph
          initTemprature={currentTemp}
          newTemprature={newTemprature}
        />
      </Fragment>
    )
  }
  startTheInterval = () => {
    this.interval = setInterval(() => {
      const { max, min } = this.props
      this.setState(
        () => ({ timeout: this.state.timeout - 1 }),
        () => {
          if (this.state.timeout < 0) {
            this.setState(() => ({
              newTemprature: getRandomTemperature(max, min),
              timeout: this.props.timeout
            }))
          }
        }
      )
    }, 1000)
  }
}

GraphContainerClass.propTypes = {
  currentTemp: number,
  timeout: number.isRequired,
  max: number.isRequired,
  min: number.isRequired
}

const mapStateToProps = state => ({
  currentTemp: state.openWeather.data,
  timeout: state.controls.timeout,
  max: state.controls.max,
  min: state.controls.min
})

export const GraphContainer = connect(mapStateToProps)(GraphContainerClass)
