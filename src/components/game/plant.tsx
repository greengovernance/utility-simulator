import * as React from 'react'
import Card from 'reactstrap/lib/Card'
import { getPlant } from '../../simulation/selectors'
import { useSelector } from 'react-redux'

const Plant: React.SFC<{ id: string; className?: string }> = (props) => {
  const { className, id } = props
  const plant = useSelector(getPlant(id))
  if (!plant) {
    return <div>Plant with id {id} not found</div>
  }
  return (
    <Card className={className}>
      <div>{plant.type} plant</div>
      <div>Capacity: {plant.capacity}</div>
      <div>Emissions: {plant.emissions}</div>
      <div>Operating cost: {plant.operatingCost}</div>
      <div>Idle cost: {plant.idleCost}</div>
    </Card>
  )
}

export default Plant
