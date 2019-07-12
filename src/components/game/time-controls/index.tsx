import * as React from 'react'
import { useSelector } from 'react-redux'
import { getTick } from '../../../simulation/selectors'
import Tick from '../../number-formatters/tick'
import Row from 'reactstrap/lib/Row'
import StepButtons from './step-buttons'
import Col from 'reactstrap/lib/Col'
import AutoStepControl from './auto-step-control'

const TimeControls: React.SFC = () => {
  const tick = useSelector(getTick)
  return (
    <Row className="d-flex justify-content-center align-items-baseline">
      <Col xs="auto">
        <b>
          <Tick>{tick}</Tick>
        </b>
      </Col>
      <Col xs="auto" className="flex-grow-1">
        <StepButtons />
      </Col>
      <Col xs="auto">
        <AutoStepControl />
      </Col>
    </Row>
  )
}

export default TimeControls
