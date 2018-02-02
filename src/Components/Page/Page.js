import * as style from './Page.scss'

import React from 'react'
import { number } from 'prop-types'
import {Graph} from '../Graph/Graph'
import {Controls} from '../Controls/Controls'

export const Page = ({ currentTemp }) => (
  <div className={style.container}>
    <header>
      <h1 className={style.header}>Temperature Graph App</h1>
    </header>
    <p>Berlin Temperature: {currentTemp}</p>
    <Controls />
    <div className={style.wrapper}>
      <Graph initTemprature={currentTemp}/>
    </div>
  </div>
)

Page.propTypes = {
  currentTemp: number
}
