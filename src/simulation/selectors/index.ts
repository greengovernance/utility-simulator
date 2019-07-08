import * as common from '../reducers/common'
import * as plants from '../reducers/plants'
import { GlobalState } from '../create-store'

export const getDemand = () => 10

export const getTick = (state: GlobalState) => state[common.mountPoint].tick

export const getTotalCosts = (state: GlobalState) =>
  state[plants.mountPoint].totalCosts

export const getTotalEmissions = (state: GlobalState) =>
  state[plants.mountPoint].totalEmissions

export const getTotalUnderSuppliedEnergy = (state: GlobalState) =>
  state[plants.mountPoint].totalUnderSuppliedEnergy

export const getPrioritizedPlants = (state: GlobalState) =>
  state[plants.mountPoint].prioritizedPlants

export const getPlant = (id: string) => (state: GlobalState) =>
  getPrioritizedPlants(state).find((pl) => pl.id === id)

export const getNumberOfPlants = (state: GlobalState) =>
  getPrioritizedPlants(state).length

export const getPlantPriority = (id: string) => (state: GlobalState) =>
  getPrioritizedPlants(state).findIndex((pl) => pl.id === id)
