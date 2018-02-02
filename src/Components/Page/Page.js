import * as style from './Page.scss'

import React from 'react'
import { number } from 'prop-types'
import {Graph} from '../Graph/Graph'

export const Page = ({ currentTemp }) => (
  <div className={style.container}>
    <header>
      <h1 className={style.header}>Temprature Graph App</h1>
    </header>
    <p>Berlin Temprature: {currentTemp}</p>
    <div className={style.wrapper}>
      <Graph initTemprature={currentTemp}/>
    </div>
  </div>
)

Page.propTypes = {
  currentTemp: number
}
