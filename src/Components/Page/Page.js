import * as style from './Page.scss'

import React from 'react'
import { number } from 'prop-types'
import { Line, defaults } from 'react-chartjs-2'

console.log(defaults);

defaults.global = {
  ...defaults.global,
  defaultFontFamily: "'Roboto', sans-serif",
  defaultFontColor: 'rgb(22, 24, 22)',
  tooltips: {
    ...defaults.global.tooltips,
    backgroundColor: 'rgb(175, 169, 169)',
    caretPadding: 5,
    cornerRadius: 2,
    displayColors: false,
    footerSpacing: 2,
    xPadding: 15,
    yPadding: 10
  }
}

const DEGREE_CELSIUS = String.fromCharCode(8451)

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Temperature Graph',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(10, 118, 205, 0.4)',
      borderColor: 'rgb(10, 118, 205)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgb(10, 118, 205)',
      pointBackgroundColor: 'rgb(255, 254, 254)',
      pointBorderWidth: 5,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: 'rgb(10, 118, 205)',
      pointHoverBorderColor: 'rgb(231, 231, 233)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
}

const options = {
  legend: {
    display: false
  },
  tooltips: {
    callbacks: {
      title: function() {
        return undefined
      },
      label: function(tooltipItem) {
        const { xLabel, yLabel } = tooltipItem
        return `${xLabel}: ${yLabel}${DEGREE_CELSIUS}`
      },
      labelTextColor: function(tooltipItem, chart) {
        return 'rgb(255, 254, 254)'
      }
    }
  }
}

export const Page = ({ currentTemp }) => (
  <div className={style.container}>
    <header>
      <h1 className={style.header}>Temprature Graph App</h1>
    </header>
    <p>Berlin Temprature: {currentTemp}</p>
    <div className={style.wrapper}>
      <Line data={data} options={options} />
    </div>
  </div>
)

Page.propTypes = {
  currentTemp: number
}
