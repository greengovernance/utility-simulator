import * as React from 'react'
import { useDispatch } from 'react-redux'
import step from '../../simulation/step'
import Button from 'reactstrap/lib/Button'
import times from 'lodash/times'

const StepButtons: React.SFC<{}> = () => {
  const dispatch = useDispatch()
  const stepHour = React.useCallback(() => dispatch(step()), [dispatch])
  const stepDay = React.useCallback(() => times(24, () => dispatch(step())), [
    dispatch,
  ])
  const step30Days = React.useCallback(
    () => times(24 * 30, () => dispatch(step())),
    [dispatch],
  )
  const stepYear = React.useCallback(
    () => times(24 * 365, () => dispatch(step())),
    [dispatch],
  )
  return (
    <div className="step-buttons d-flex justify-content-center">
      <Button color="text" disabled onClick={stepHour} outline>
        Advance:
      </Button>
      <Button color="primary" onClick={stepHour} outline>
        1h
      </Button>
      <Button color="primary" onClick={stepDay} outline>
        1d
      </Button>
      <Button color="primary" onClick={step30Days} outline>
        30d
      </Button>
      <Button color="primary" onClick={stepYear} outline>
        1y
      </Button>
    </div>
  )
}

export default StepButtons
