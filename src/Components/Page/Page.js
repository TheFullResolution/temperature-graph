import * as style from './Page.scss'

import React from 'react'
import { number } from 'prop-types'
import {GraphContainer} from '../GraphContainer/GraphContainer'
import {Controls} from '../Controls/Controls'

export const Page = ({ currentTemp }) => (
  <div className={style.container}>
    <header>
      <h1 className={style.header}>Temperature Graph App</h1>
    </header>

    <Controls />
    <div className={style.wrapper}>
      <GraphContainer />
    </div>
  </div>
)

Page.propTypes = {
  currentTemp: number
}
