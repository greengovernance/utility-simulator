import { supplyPower, handleSupplyPower } from './actions/supply-power'
import {
  changePlantPriority,
  handleChangePlantPriority,
} from './actions/change-plant-priority'
import {
  setEnergyDemandThisTick,
  handleSetEnergyDemandThisTick,
} from './actions/set-energy-demand-this-tick'
import { State } from './types'
import { createReducer } from 'redux-act'
import { GlobalState } from '../../create-store'
import getSupplyActions from './get-supply-actions'
import * as common from '../common'
import { getDemand } from '../../selectors'
import createNewPlant from '../create-new-plant'

const initialState: State = {
  totalCosts: 0,
  totalEmissions: 0,
  totalUnderSuppliedEnergy: 0,
  energySupplyThisTick: 0,
  energyDemandThisTick: 0,
  prioritizedPlants: [
    createNewPlant({ type: 'solar', capacity: 1000 }),
    createNewPlant({ type: 'coal', capacity: 10000 }),
    createNewPlant({ type: 'coal', capacity: 10000 }),
  ],
}

export const actions = {
  supplyPower,
  changePlantPriority,
  setEnergyDemandThisTick,
}

export const reducer = createReducer({}, initialState)
reducer.on(supplyPower, handleSupplyPower)
reducer.on(changePlantPriority, handleChangePlantPriority)
reducer.on(setEnergyDemandThisTick, handleSetEnergyDemandThisTick)
reducer.on(
  common.actions.nextTick,
  (state): State => {
    const underSupply = Math.max(
      0,
      state.energyDemandThisTick - state.energySupplyThisTick,
    )
    return {
      ...state,
      energySupplyThisTick: 0,
      energyDemandThisTick: 0,
      totalUnderSuppliedEnergy: underSupply + state.totalUnderSuppliedEnergy,
    }
  },
)

export const mountPoint: 'plants' = 'plants'

export { State } from './types'

export const tickActions = (state: GlobalState) => {
  const demand = getDemand(state)
  return [
    setEnergyDemandThisTick({ demand }),
    ...getSupplyActions(state, demand).map(actions.supplyPower),
  ]
}
