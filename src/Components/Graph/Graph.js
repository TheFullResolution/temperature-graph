import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'
import { initData, options } from './graphConfig'
import { number } from 'prop-types'
import update from 'immutability-helper'

const formatTime = time => time.toString().padStart(2, '0')

const getTime = () => {
  const now = new Date()
  return `${formatTime(now.getHours())}:${formatTime(
    now.getMinutes()
  )}:${formatTime(now.getSeconds())} `
}

class Graph extends Component {
  state = initData

  updateState = temprature => {
    const time = getTime()

    this.setState(() =>
      update(this.state, {
        datasets: { 0: { data: { $push: [temprature] } } },
        labels: { $push: [time] }
      })
    )
  }

  componentDidMount() {
    this.updateState(this.props.initTemprature)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newTemprature !== this.props.newTemprature) {
      this.updateState(nextProps.newTemprature)
    }
  }

  render() {
    return <Line data={this.state} options={options} />
  }
}
Graph.defaultProps = {
  newTemprature: 0
}
Graph.propTypes = {
  initTemprature: number,
  newTemprature: number
}

export { Graph }
