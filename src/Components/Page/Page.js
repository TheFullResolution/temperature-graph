import * as style from './Page.scss'

import React from 'react'
import { number } from 'prop-types'
import {GraphContainer} from '../GraphContainer/GraphContainer'
import {ControlsContainer} from '../ControlsContainer/ControlsContainer'

export const Page = ({ currentTemp }) => (
  <div className={style.container}>
    <header>
      <h1 className={style.header}>Temperature Graph App</h1>
    </header>

    <ControlsContainer />
    <div className={style.wrapper}>
      <GraphContainer />
    </div>
  </div>
)

Page.propTypes = {
  currentTemp: number
}
