import * as React from 'react'
import { useSelector } from 'react-redux'
import { getPlantConstructionOptions } from '../../../simulation/selectors'
import Plant from '../plant'

const PlantConstructor: React.SFC = () => {
  const options = useSelector(getPlantConstructionOptions)
  return (
    <div className="plant-constructor">
      {options.map((p) => (
        <Plant key={p.id} plant={p} />
      ))}
    </div>
  )
}

export default PlantConstructor
