import { createAction } from 'redux-act'
import { State } from '../types'

export interface ChangePlantPriorityPayload {
  id: string
  newPriority: number
}

export const changePlantPriority = createAction<ChangePlantPriorityPayload>()

export const handleChangePlantPriority = (
  state: Readonly<State>,
  payload: ChangePlantPriorityPayload,
) => {
  const plantToChange = state.prioritizedPlants.find(
    (pl) => pl.id === payload.id,
  )
  if (!plantToChange) {
    throw new Error(
      `Tried to change priority of plant that does not exist id: ${payload.id}`,
    )
  }
  const newPlants = state.prioritizedPlants.filter((pl) => pl.id !== payload.id)
  newPlants.splice(payload.newPriority, 0, plantToChange)
  return {
    ...state,
    prioritizedPlants: newPlants,
  }
}
