import * as React from 'react'
import { useSelector } from 'react-redux'
import { getPrioritizedPlants } from '../../../simulation/selectors'
import PlantWithControls from './plant-with-controls'

const PlantPrioritizer: React.SFC<{}> = () => {
  const plants = useSelector(getPrioritizedPlants)
  return (
    <div className="plant-prioritizer">
      <h2>Your power plants</h2>
      {plants.map((p) => (
        <div className="mb-3">
          <PlantWithControls plant={p} />
        </div>
      ))}
    </div>
  )
}

export default PlantPrioritizer
