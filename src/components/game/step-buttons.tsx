import * as React from 'react'
import { useDispatch } from 'react-redux'
import step from '../../simulation/step'
import Button from 'reactstrap/lib/Button'

const StepButtons: React.SFC<{}> = () => {
  const dispatch = useDispatch()
  const stepOne = React.useCallback(() => dispatch(step()), [dispatch])
  return (
    <div className="step-buttons">
      <Button color="primary" onClick={stepOne}>
        Step
      </Button>
    </div>
  )
}

export default StepButtons
