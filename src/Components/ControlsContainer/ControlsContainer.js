import * as style from './ControlsContainer.scss'

import React from 'react'
import { Controls } from './Controls/Controls'
import { connect } from 'react-redux'
import { controlsActions } from '../../store/controls/controlsActions'
import { func, number } from 'prop-types'

const DEGREE_CELSIUS = String.fromCharCode(8451)

const ControlsComponent = ({
  max,
  min,
  timeout,
  updateMax,
  updateMin,
  updateTimeout,
}) => {
  return (
    <div className={style.container}>
      <Controls
        label="Timeout"
        min={1}
        unit={'s'}
        update={updateTimeout}
        value={timeout}
        warningMessage="Value cannot be lower than 1"
      />
      <Controls
        label="Max. Temperature"
        min={min + 1}
        unit={DEGREE_CELSIUS}
        update={updateMax}
        value={max}
        warningMessage="Value cannot be lower than min. temperature"
      />
      <Controls
        label="Min. Temperature"
        max={max - 1}
        unit={DEGREE_CELSIUS}
        update={updateMin}
        value={min}
        warningMessage="Value cannot be higher than max. temperature"
      />
    </div>
  )
}

ControlsComponent.propTypes = {
  max: number.isRequired,
  min: number.isRequired,
  timeout: number.isRequired,
  updateMax: func.isRequired,
  updateMin: func.isRequired,
  updateTimeout: func.isRequired,
}

const mapStateToProps = state => ({
  max: state.controls.max,
  min: state.controls.min,
  timeout: state.controls.timeout,
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
