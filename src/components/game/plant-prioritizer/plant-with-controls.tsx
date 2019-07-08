import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../../simulation/reducers/plants'
import Plant from '../plant'
import Button from 'reactstrap/lib/Button'
import {
  getNumberOfPlants,
  getPlantPriority,
} from '../../../simulation/selectors'

const PlantWithControls: React.SFC<{ id: string }> = (props) => {
  const dispatch = useDispatch()
  const numberOfPlants = useSelector(getNumberOfPlants)
  const currentPriority = useSelector(getPlantPriority(props.id))
  const toTop = React.useCallback(
    () =>
      dispatch(actions.changePlantPriority({ id: props.id, newPriority: 0 })),
    [dispatch, props.id],
  )
  const toBottom = React.useCallback(
    () =>
      dispatch(
        actions.changePlantPriority({
          id: props.id,
          newPriority: numberOfPlants,
        }),
      ),
    [dispatch, props.id, numberOfPlants],
  )
  const upOne = React.useCallback(
    () =>
      dispatch(
        actions.changePlantPriority({
          id: props.id,
          newPriority: currentPriority - 1,
        }),
      ),
    [dispatch, props.id, currentPriority],
  )
  const downOne = React.useCallback(
    () =>
      dispatch(
        actions.changePlantPriority({
          id: props.id,
          newPriority: currentPriority + 1,
        }),
      ),
    [dispatch, props.id, currentPriority],
  )

  return (
    <div className="plant-with-controls">
      <Plant id={props.id} />
      <div className="controls">
        <Button onClick={toTop} size="sm">
          Top
        </Button>
        <Button onClick={upOne} size="sm">
          Up
        </Button>
        <Button onClick={downOne} size="sm">
          Down
        </Button>
        <Button onClick={toBottom} size="sm">
          Bottom
        </Button>
      </div>
    </div>
  )
}

export default PlantWithControls
