import * as React from 'react'
import { useSelector } from 'react-redux'
import {
  getTick,
  getTotalCosts,
  getTotalEmissions,
  getTotalUnderSuppliedEnergy,
} from '../../simulation/selectors'

const Stats: React.SFC<{}> = () => {
  const tick = useSelector(getTick)
  const totalCosts = useSelector(getTotalCosts)
  const totalEmissions = useSelector(getTotalEmissions)
  const totalUnderSuppliedEnergy = useSelector(getTotalUnderSuppliedEnergy)
  return (
    <div className="stats">
      <div>Current tick: {tick}</div>
      <div>Amount spent so far: {totalCosts}</div>
      <div>Emissions so far: {totalEmissions}</div>
      <div>Amount of under-supplied energy: {totalUnderSuppliedEnergy}</div>
    </div>
  )
}

export default Stats
