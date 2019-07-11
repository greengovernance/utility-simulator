import * as React from 'react'
import { useSelector } from 'react-redux'
import {
  getTick,
  getTotalCosts,
  getTotalEmissions,
  getTotalUnderSuppliedEnergy,
} from '../../simulation/selectors'
import getTickDemand from '../../simulation/demand/get-tick-demand'
import range from 'lodash/range'
import sum from 'lodash/sum'
import Currency from '../number-formatters/currency'
import Emissions from '../number-formatters/emissions'
import Energy from '../number-formatters/energy'
import Tick from '../number-formatters/tick'
import Row from 'reactstrap/lib/Row'
import Col from 'reactstrap/lib/Col'

const Stat: React.SFC<{ label: string }> = (props) => {
  return (
    <Col>
      <div>{props.label}</div>
      {props.children}
    </Col>
  )
}

const Stats: React.SFC<{}> = () => {
  const tick = useSelector(getTick)
  const totalCosts = useSelector(getTotalCosts)
  const totalEmissions = useSelector(getTotalEmissions)
  const totalUnderSuppliedEnergy = useSelector(getTotalUnderSuppliedEnergy)
  const upcomingDemand = React.useMemo(
    () => range(tick, tick + 24).map(getTickDemand),
    [tick],
  )
  return (
    <Row className="stats">
      <Stat label="Time">
        <Tick>{tick}</Tick>
      </Stat>
      <Stat label="Total spent">
        <Currency>{totalCosts}</Currency>
      </Stat>
      <Stat label="Emissions">
        <Emissions>{totalEmissions}</Emissions>
      </Stat>
      <Stat label="Energy shortfall">
        <Energy>{totalUnderSuppliedEnergy}</Energy>
      </Stat>
      <Stat label="Peak demand in next 24 hrs">
        <Energy>{Math.max(...upcomingDemand)}</Energy>
      </Stat>
    </Row>
  )
}

export default Stats
