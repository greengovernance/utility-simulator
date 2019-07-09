import * as React from 'react'
import Card from 'reactstrap/lib/Card'
import { getPlant } from '../../simulation/selectors'
import { useSelector } from 'react-redux'
import { Plant as IPlant } from '../../simulation/reducers/plants/types'
import Power from '../number-formatters/power'
import Emissions from '../number-formatters/emissions'
import Currency from '../number-formatters/currency'

type Props = { plant: IPlant; className?: string }

const Plant: React.SFC<Props> = (props) => {
  const { plant, className } = props
  return (
    <Card className={className}>
      <div>{plant.type} plant</div>
      <div>
        Capacity: <Power>{plant.capacity}</Power>
      </div>
      <div>
        Daily emissions: <Emissions>{plant.emissions * 24}</Emissions>
      </div>
      <div>
        Daily operating cost: <Currency>{plant.operatingCost * 24}</Currency>
      </div>
      <div>
        Daily idle cost: <Currency>{plant.idleCost * 24}</Currency>
      </div>
    </Card>
  )
}

interface ConnectedPlantProps extends Omit<Props, 'plant'> {
  id: string
}
export const ConnectedPlant: React.SFC<ConnectedPlantProps> = (props) => {
  const plant = useSelector(getPlant(props.id))
  if (!plant) {
    return <div>Plant with id {props.id} not found</div>
  }
  return <Plant {...props} plant={plant} />
}

export default Plant
