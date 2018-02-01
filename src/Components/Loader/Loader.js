import * as style from './Loader.scss'

import React from 'react'

export const Loader = () =>
  <div className={style.container}>
    <div className={style.loader}/>
    <p>loading...</p>
  </div>
