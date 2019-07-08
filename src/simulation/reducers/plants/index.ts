import { supplyPower, handleSupplyPower } from './actions/supply-power'
import {
  changePlantPriority,
  handleChangePlantPriority,
} from './actions/change-plant-priority'
import { State } from './types'
import { createReducer } from 'redux-act'
import { GlobalState } from '../../create-store'
import getSupplyActions from './get-supply-actions'

const initialState: State = {
  totalCosts: 0,
  totalEmissions: 0,
  totalUnderSuppliedEnergy: 0,
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
}

export const reducer = createReducer({}, initialState)
reducer.on(supplyPower, handleSupplyPower)
reducer.on(changePlantPriority, handleChangePlantPriority)

export const mountPoint: 'plants' = 'plants'

export { State } from './types'

export const tickActions = (state: GlobalState) => {
  return getSupplyActions(state).map(actions.supplyPower)
}
