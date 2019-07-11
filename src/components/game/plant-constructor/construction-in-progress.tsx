import * as React from 'react'
import { useSelector } from 'react-redux'
import { getConstructionsInProgress } from '../../../simulation/selectors'
import TickDuration from '../../number-formatters/tick-duration'

const ConstructionInProgress: React.SFC = () => {
  const inProgress = useSelector(getConstructionsInProgress)

  console.log(inProgress[0] && inProgress[0].ticksRemaining)
  return (
    <div className="in-progress">
      <h2>Plants in progress</h2>
      {inProgress.length === 0 && (
        <div className="text-center text-muted">No plants in progress</div>
      )}
      {inProgress.map((pc) => (
        <div className="plant-construction">
          {pc.plant.type} <TickDuration>{pc.ticksRemaining}</TickDuration>{' '}
          remaining
        </div>
      ))}
    </div>
  )
}

export default ConstructionInProgress
