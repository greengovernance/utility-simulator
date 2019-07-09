import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../../simulation/reducers/plants'
import Plant from '../plant'
import Button from 'reactstrap/lib/Button'
import {
  getNumberOfPlants,
  getPlantPriority,
} from '../../../simulation/selectors'
import { Plant as IPlant } from '../../../simulation/reducers/plants/types'

const PlantWithControls: React.SFC<{ plant: IPlant }> = (props) => {
  const id = props.plant.id
  const dispatch = useDispatch()
  const numberOfPlants = useSelector(getNumberOfPlants)
  const currentPriority = useSelector(getPlantPriority(props.plant.id))
  const toTop = React.useCallback(
    () =>
      dispatch(
        actions.changePlantPriority({ id: props.plant.id, newPriority: 0 }),
      ),
    [dispatch, props.plant.id],
  )
  const toBottom = React.useCallback(
    () =>
      dispatch(
        actions.changePlantPriority({
          id,
          newPriority: numberOfPlants - 1,
        }),
      ),
    [dispatch, id, numberOfPlants],
  )
  const upOne = React.useCallback(
    () =>
      dispatch(
        actions.changePlantPriority({
          id,
          newPriority: currentPriority - 1,
        }),
      ),
    [dispatch, id, currentPriority],
  )
  const downOne = React.useCallback(
    () =>
      dispatch(
        actions.changePlantPriority({
          id,
          newPriority: currentPriority + 1,
        }),
      ),
    [dispatch, id, currentPriority],
  )

  return (
    <div className="plant-with-controls">
      <Plant plant={props.plant} />
      <div className="controls">
        <Button onClick={toTop} size="sm" disabled={currentPriority === 0}>
          Top
        </Button>
        <Button onClick={upOne} size="sm" disabled={currentPriority === 0}>
          Up
        </Button>
        <Button
          onClick={downOne}
          size="sm"
          disabled={currentPriority === numberOfPlants - 1}
        >
          Down
        </Button>
        <Button
          onClick={toBottom}
          size="sm"
          disabled={currentPriority === numberOfPlants - 1}
        >
          Bottom
        </Button>
      </div>
    </div>
  )
}

export default PlantWithControls
