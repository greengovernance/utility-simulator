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
    <div className="stats">
      <div>
        Current tick: <Tick>{tick}</Tick>
      </div>
      <div>
        Amount spent so far: <Currency>{totalCosts}</Currency>
      </div>
      <div>
        Emissions so far: <Emissions>{totalEmissions}</Emissions>
      </div>
      <div>
        Amount of under-supplied energy:{' '}
        <Energy>{totalUnderSuppliedEnergy}</Energy>
      </div>
      <div>
        Total demand for next 24 hours: <Energy>{sum(upcomingDemand)}</Energy>
      </div>
      <div>
        Peak demand in next 24 hours:{' '}
        <Energy>{Math.max(...upcomingDemand)}</Energy>
      </div>
    </div>
  )
}

export default Stats
