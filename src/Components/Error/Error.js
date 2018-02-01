import * as style from './Error.scss'

import React from 'react'

export const Error = () =>
  <div className={style.container}>
      <h1>Error!</h1>
      <p>Something went wrong... Please check us another time.</p>
      <img src="error.png" alt="Error Sign"/>
  </div>
