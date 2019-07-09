import * as React from 'react'
import { useSelector } from 'react-redux'
import { getPrioritizedPlants } from '../../../simulation/selectors'
import PlantWithControls from './plant-with-controls'

const PlantPrioritizer: React.SFC<{}> = () => {
  const plants = useSelector(getPrioritizedPlants)
  return (
    <div className="plant-prioritizer">
      {plants.map((p) => (
        <PlantWithControls plant={p} key={p.id} />
      ))}
    </div>
  )
}

export default PlantPrioritizer
