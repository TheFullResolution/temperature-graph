import * as style from './Controls.scss'

import React from 'react'
import { func, number } from 'prop-types'
import { connect } from 'react-redux'
import { controlsActions } from '../../store/controls/controlsActions'
import { Control } from '../Control/Control'

const DEGREE_CELSIUS = String.fromCharCode(8451)

const ControlsComponent = props => {
  return (
    <div className={style.container}>
      <Control
        label="Timeout"
        min={1}
        unit={'s'}
        update={props.updateTimeout}
        value={props.timeout}
      />
      <Control
        label="Max. Temperature"
        unit={DEGREE_CELSIUS}
        update={props.updateMax}
        value={props.max}
      />
      <Control
        label="Min. Temperature"
        unit={DEGREE_CELSIUS}
        update={props.updateMin}
        value={props.min}
      />
    </div>
  )
}

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
