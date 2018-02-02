import * as style from './Controls.scss'

import React from 'react'
import { func, number, string } from 'prop-types'
import { connect } from 'react-redux'
import { controlsActions } from '../../store/controls/controlsActions'

const Control = ({ value, update, label }) => {
  const onChange = ev => update(Number(ev.target.value))
  const add = () => update(value + 1)
  const substruct = () => update(value - 1)
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        id={label}
        type="number"
        onChange={onChange}
        step={1}
        value={value}
      />
      <div>
        <button onClick={add}>+</button>
        <button onClick={substruct}>-</button>
      </div>
    </div>
  )
}

Control.propTypes = {
  label: string.isRequired,
  update: func.isRequired,
  value: number.isRequired
}

const ControlsComponent = props => (
  <div>
    <Control
      label="Timeout"
      update={props.updateTimeout}
      value={props.timeout}
    />
    <Control
      label="Max Temperature"
      update={props.updateMax}
      value={props.max}
    />
    <Control
      label="Min Temperature"
      update={props.updateMin}
      value={props.min}
    />
  </div>
)

ControlsComponent.propTypes = {
  updateTimeout: func.isRequired,
  timeout: number.isRequired,
  updateMax: func.isRequired,
  max: number.isRequired,
  updateMin: func.isRequired,
  min: number.isRequired
}

const mapStateToProps = state => ({
  timeout: state.controls.timeout,
  max: state.controls.max,
  min: state.controls.min
})

const mapDispatchToProps = dispatch => {
  return {
    updateTimeout: value => {
      dispatch(controlsActions.updateTimeout(value))
    },
    updateMax: value => {
      dispatch(controlsActions.updateMax(value))
    },
    updateMin: value => {
      dispatch(controlsActions.updateMin(value))
    }
  }
}
export const Controls = connect(mapStateToProps, mapDispatchToProps)(
  ControlsComponent
)
