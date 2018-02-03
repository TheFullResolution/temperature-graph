import { defaults } from 'react-chartjs-2'

const DEGREE_CELSIUS = String.fromCharCode(8451)

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

export const options = {
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
  },
  scales: {
    yAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Temperature'
        },
        ticks: {
          callback: function(value, index, values) {
            return `${Math.floor10(value, -1)}${DEGREE_CELSIUS}`
          }
        }
      }
    ],
    xAxes: [
      {
        scaleLabel: {
          display: true,
          labelString: 'Time'
        }
      }
    ]
  }
}

export const initData = {
  labels: [],
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
      data: []
    }
  ]
}
