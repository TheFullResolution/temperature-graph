import * as style from './Controls.scss'

import React, { Component } from 'react'
import { func, number, string } from 'prop-types'

const MINUS = String.fromCharCode(8722)

export class Controls extends Component {
  state = { pressedAdd: false, pressedSubstruct: false, showWarning: false }
  timeout = null
  start = 1000

  render() {
    const { label, value, unit, warningMessage } = this.props
    return (
      <div className={style.container}>
        <p>
          {label}: {value}
          {unit}
        </p>
        <div className={style.wrapper}>
          <button
            aria-label={`add 1 to ${label}`}
            className={`${style.button} ${style.plus} ${this.state.pressedAdd &&
              style.pressed}`}
            onKeyDown={this.onKeyDownAdd}
            onMouseDown={this.startRepeatAdd}
            onMouseOut={this.stopRepeat}
            onMouseUp={this.stopRepeat}
            onTouchEnd={this.stopRepeat}
            onTouchStart={this.startRepeatAdd}>
            +
          </button>
          <button
            aria-label={`substruct 1 from ${label}`}
            className={`${style.button} ${style.minus} ${this.state
              .pressedSubstruct && style.pressed}`}
            onKeyDown={this.onKeyDownSubstruct}
            onMouseDown={this.startRepeatSubstruct}
            onMouseOut={this.stopRepeat}
            onMouseUp={this.stopRepeat}
            onTouchEnd={this.stopRepeat}
            onTouchStart={this.startRepeatSubstruct}>
            {MINUS}
          </button>
          {this.state.showWarning &&
            warningMessage && <p className={style.warning}>{warningMessage}</p>}
        </div>
      </div>
    )
  }

  add = () => {
    const { max, update, value } = this.props
    if (max === undefined || (max !== undefined && value + 1 <= max)) {
      update(value + 1)
      if (this.state.showWarning) this.setState(() => ({ showWarning: false }))
    } else this.setState(() => ({ showWarning: true }))
  }

  substruct = () => {
    const { min, update, value } = this.props
    if (min === undefined || (min !== undefined && value - 1 >= min)) {
      update(value - 1)
      if (this.state.showWarning) this.setState(() => ({ showWarning: false }))
    } else this.setState(() => ({ showWarning: true }))
  }

  repeat(operation) {
    operation()
    this.timeout = setTimeout(() => {
      this.repeat(operation)
    }, this.start)
    if (this.start > 100) this.start = this.start / 2
  }

  stopRepeat = () => {
    this.setState(() => ({
      pressedAdd: false,
      pressedSubstruct: false
    }))
    this.start = 1000
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

Controls.propTypes = {
  label: string.isRequired,
  max: number,
  min: number,
  unit: string.isRequired,
  update: func.isRequired,
  value: number.isRequired,
  warningMessage: string
}
