import { createAction } from 'redux-act'
import { State } from '../types'

export interface SupplyPowerPayload {
  energy: number
  emissions: number
  cost: number
}

export const supplyPower = createAction<SupplyPowerPayload>()

export const handleSupplyPower = (
  state: Readonly<State>,
  payload: SupplyPowerPayload,
): State => {
  return {
    ...state,
    totalCosts: state.totalCosts + payload.cost,
    totalEmissions: state.totalEmissions + payload.emissions,
    energySupplyThisTick: state.energySupplyThisTick + payload.energy,
  }
}
