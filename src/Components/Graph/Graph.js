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
    if (this.props.temprature) {
      this.updateState(this.props.temprature)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.temprature !== this.props.temprature) {
      this.updateState(nextProps.temprature)
    }
  }

  render() {
    return <Line data={this.state} options={options} />
  }
}

Graph.propTypes = {
  temprature: number
}

export { Graph }
