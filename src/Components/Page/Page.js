import * as style from './Page.scss'

import React from 'react'
import { number } from 'prop-types'
import {GraphContainer} from '../GraphContainer/GraphContainer'
import {ControlsContainer} from '../ControlsContainer/ControlsContainer'

export const Page = ({ currentTemp }) => (
  <div className={style.container}>
    <header className={style.header} data-test="header">
      <h1>Temperature Monitoring and Control</h1>
      <p>Long press the buttons to adjust values faster!</p>
    </header>

    <ControlsContainer />
    <div className={style.wrapper} data-test="graph-wrapper">
      <GraphContainer />
    </div>
  </div>
)

Page.propTypes = {
  currentTemp: number
}
