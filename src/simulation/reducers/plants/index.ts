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
import getSupplyAction from './get-supply-action'
import * as common from '../common'
import * as plantConstructions from '../plant-constructions'
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
reducer.on(
  plantConstructions.actions.beginPlantConstruction,
  (state, payload) => {
    return {
      ...state,
      totalCosts: state.totalCosts + payload.cost,
    }
  },
)

reducer.on(
  plantConstructions.actions.completeConstruction,
  (state, payload) => {
    return {
      ...state,
      prioritizedPlants: [...state.prioritizedPlants, payload],
    }
  },
)

export const mountPoint: 'plants' = 'plants'

export { State } from './types'

export const tickActions = (state: GlobalState) => {
  const demand = getDemand(state)
  return [
    setEnergyDemandThisTick({ demand }),
    actions.supplyPower(getSupplyAction(state, demand)),
  ]
}
