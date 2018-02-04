import * as style from './ControlsContainer.scss'

import React from 'react'
import { func, number } from 'prop-types'
import { connect } from 'react-redux'
import { controlsActions } from '../../store/controls/controlsActions'
import { Controls } from './Controls/Controls'

const DEGREE_CELSIUS = String.fromCharCode(8451)

const ControlsComponent = props => {
  return (
    <div className={style.container}>
      <Controls
        label="Timeout"
        min={1}
        unit={'s'}
        update={props.updateTimeout}
        value={props.timeout}
        warningMessage="Value cannot be lower than 1"
      />
      <Controls
        label="Max. Temperature"
        min={props.min + 1}
        unit={DEGREE_CELSIUS}
        update={props.updateMax}
        value={props.max}
        warningMessage="Value cannot be lower than min. temperature"
      />
      <Controls
        label="Min. Temperature"
        max={props.max - 1}
        unit={DEGREE_CELSIUS}
        update={props.updateMin}
        value={props.min}
        warningMessage="Value cannot be higher than max. temperature"
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

export const ControlsContainer = connect(mapStateToProps, mapDispatchToProps)(
  ControlsComponent
)
