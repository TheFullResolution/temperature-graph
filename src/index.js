import './scss/app.scss'

import 'focus-visible/dist/focus-visible.js'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/redux'
import {App} from './Components/App/App'
import {addDecimalAdjust} from './helpers/decimalAdjust'
import {isIntegerPolyfill} from './helpers/isIntegerPolyfill'
import {padStartPolyfill} from './helpers/padStartPolyfill'

addDecimalAdjust()
isIntegerPolyfill()
padStartPolyfill()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
