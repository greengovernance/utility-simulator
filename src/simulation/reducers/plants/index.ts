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
import { getDemand, getTotalUnderSuppliedEnergy } from '../../selectors'

const initialState: State = {
  totalCosts: 0,
  totalEmissions: 0,
  totalUnderSuppliedEnergy: 0,
  energySupplyThisTick: 0,
  energyDemandThisTick: 0,
  prioritizedPlants: [
    {
      type: 'solar',
      capacity: 5,
      idleCost: 1,
      operatingCost: 1,
      emissions: 0,
      age: 0,
      id: '1',
    },
    {
      type: 'coal',
      capacity: 3,
      idleCost: 0.1,
      operatingCost: 2,
      emissions: 1,
      age: 0,
      id: '2',
    },
    {
      type: 'coal',
      capacity: 4,
      idleCost: 0.2,
      operatingCost: 4,
      emissions: 2,
      age: 0,
      id: '3',
    },
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
    console.log('demand', state.energyDemandThisTick)
    console.log('supply', state.energySupplyThisTick)
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
