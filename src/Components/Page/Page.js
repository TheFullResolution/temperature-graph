import * as style from './Page.scss'

import React from 'react'
import { number } from 'prop-types'

export const Page = ({ currentTemp }) => (
  <div className={style.container}>
    <header>
      <h1 className={style.header}>Temprature Graph App</h1>
    </header>
    <p>Berlin Temprature: {currentTemp}</p>
  </div>
)

Page.propTypes = {
  currentTemp: number
}
