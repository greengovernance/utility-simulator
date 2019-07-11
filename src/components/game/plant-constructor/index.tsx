import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPlantConstructionOptions } from '../../../simulation/selectors'
import Plant from '../plant'
import TickDuration from '../../number-formatters/tick-duration'
import Currency from '../../number-formatters/currency'
import { actions } from '../../../simulation/reducers/plant-constructions'
import { PlantConstruction } from '../../../simulation/reducers/plants/types'
import Button from 'reactstrap/lib/Button'
import { MdPlayCircleOutline } from 'react-icons/md'

const PlantConstructor: React.SFC = () => {
  const options = useSelector(getPlantConstructionOptions)
  const dispatch = useDispatch()
  const beginConstruction = React.useCallback(
    (pc: PlantConstruction) => dispatch(actions.beginPlantConstruction(pc)),
    [dispatch],
  )
  return (
    <div className="plant-constructor">
      <h2>Build new plants</h2>
      {options.map((p) => (
        <div className="construction-option mb-3" key={p.plant.id}>
          <Plant plant={p.plant} />
          <div className="d-flex">
            <div className="flex-grow-1">
              Cost: <Currency>{p.cost}</Currency>; Time to build:{' '}
              <TickDuration>{p.ticksRemaining}</TickDuration>
            </div>
            <div>
              <Button outline size="sm" onClick={() => beginConstruction(p)}>
                <MdPlayCircleOutline />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PlantConstructor
