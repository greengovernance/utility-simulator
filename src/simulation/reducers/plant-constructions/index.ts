import { createAction, createReducer } from 'redux-act'
import { PlantConstruction, Plant } from '../plants/types'
import { GlobalState } from '../../create-store'

export interface State {
  inProgress: PlantConstruction[]
}

const initialState = (): State => ({
  inProgress: [],
})

export const actions = {
  beginPlantConstruction: createAction<PlantConstruction>(),
  advanceProgress: createAction<{ id: string }>(),
  completeConstruction: createAction<Plant>(),
}

export const reducer = createReducer<State>({}, initialState())
reducer.on(actions.beginPlantConstruction, (state, payload) => ({
  ...state,
  inProgress: [...state.inProgress, payload],
}))
reducer.on(actions.advanceProgress, (state, payload) => ({
  ...state,
  inProgress: state.inProgress.map((pc) =>
    pc.plant.id === payload.id
      ? { ...pc, ticksRemaining: pc.ticksRemaining - 1 }
      : pc,
  ),
}))
reducer.on(actions.completeConstruction, (state, payload) => ({
  ...state,
  inProgress: state.inProgress.filter((pc) => pc.plant.id !== payload.id),
}))

export const tickActions = (state: GlobalState) => {
  const inProgress = state[mountPoint].inProgress
  const advOrComplete = inProgress.map((c) =>
    c.ticksRemaining > 1
      ? actions.advanceProgress({ id: c.plant.id })
      : actions.completeConstruction(c.plant),
  )
  return advOrComplete
}

export const mountPoint: 'plantConstructions' = 'plantConstructions'
