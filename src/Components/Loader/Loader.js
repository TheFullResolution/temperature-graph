import * as style from './Loader.scss'

import React from 'react'

export const Loader = () =>
  <div className={style.container} data-test="loader">
    <div className={style.loader}/>
    <p>loading...</p>
  </div>
