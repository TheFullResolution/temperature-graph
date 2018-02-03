import * as style from './Control.scss'

import React, { Component } from 'react'
import { func, number, string } from 'prop-types'

const MINUS = String.fromCharCode(8722)
export class Control extends Component {
  state = { pressedAdd: false, pressedSubstruct: false }
  timeout = null
  start = 1000

  render() {
    const { label, value, unit } = this.props
    return (
      <div className={style.container}>
        <p>
          {label}: {value}{unit}
        </p>
        <div className={style.wrapper}>
          <button
            aria-label={`add 1 to ${label}`}
            className={`${style.button} ${style.plus} ${this.state.pressedAdd &&
              style.pressed}`}
            onKeyDown={this.onKeyDownAdd}
            onMouseDown={this.startRepeatAdd}
            onMouseOut={this.stopReapeat}
            onMouseUp={this.stopReapeat}
            onTouchEnd={this.stopReapeat}
            onTouchStart={this.startRepeatAdd}>
            +
          </button>
          <button
            aria-label={`substruct 1 from ${label}`}
            className={`${style.button} ${style.minus} ${this.state
              .pressedSubstruct && style.pressed}`}
            onKeyDown={this.onKeyDownSubstruct}
            onMouseDown={this.startRepeatSubstruct}
            onMouseOut={this.stopReapeat}
            onMouseUp={this.stopReapeat}
            onTouchEnd={this.stopReapeat}
            onTouchStart={this.startRepeatSubstruct}>
            {MINUS}
          </button>
        </div>
      </div>
    )
  }

  add = () => {
    const { update, value } = this.props
    update(value + 1)
  }

  substruct = () => {
    const { min, update, value } = this.props
    if (min === undefined || (min !== undefined && value - 1 >= min))
      update(value - 1)
  }

  repeat(operation) {
    operation()
    this.timeout = setTimeout(() => {
      this.repeat(operation)
    }, this.start)
    if (this.start > 100) this.start = this.start / 2
  }

  stopReapeat = () => {
    this.setState(() => ({
      pressedAdd: false,
      pressedSubstruct: false
    }))

    clearTimeout(this.timeout)
  }

  startRepeatAdd = () => {
    this.setState(() => ({
      pressedAdd: true
    }))
    this.repeat(this.add)
  }

  startRepeatSubstruct = () => {
    this.setState(() => ({
      pressedSubstruct: true
    }))

    this.repeat(this.substruct)
  }

  onKeyDownAdd = ev => {
    if (ev.keyCode === 32) this.add()
  }
  onKeyDownSubstruct = ev => {
    if (ev.keyCode === 32) this.substruct()
  }
}
Control.propTypes = {
  label: string.isRequired,
  unit: string.isRequired,
  update: func.isRequired,
  value: number.isRequired,
  min: number
}
