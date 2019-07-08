import { createAction } from 'redux-act'
import { State } from '../types'

export const setEnergyDemandThisTick = createAction<{ demand: number }>()

export const handleSetEnergyDemandThisTick = (
  state: State,
  payload: { demand: number },
): State => {
  return {
    ...state,
    energyDemandThisTick: payload.demand,
  }
}
