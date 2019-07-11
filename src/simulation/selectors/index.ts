import * as common from '../reducers/common'
import * as plants from '../reducers/plants'
import * as plantConstructions from '../reducers/plant-constructions'
import { GlobalState } from '../create-store'
import { Plant, PlantConstruction } from '../reducers/plants/types'
import * as uuid from 'uuid'
import memoize from 'lodash/memoize'
import getTickDemand from '../demand/get-tick-demand'
import createNewPlant from '../reducers/create-new-plant'

export const getDemand = (state: GlobalState) => {
  const tick = getTick(state)
  return getTickDemand(tick)
}

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

export const getPlantConstructionOptions = memoize(
  (state: GlobalState): Array<PlantConstruction> => {
    const coalPlants: PlantConstruction[] = [
      {
        plant: createNewPlant({ type: 'coal', capacity: 10000 }),
        // Source https://www.eia.gov/outlooks/aeo/assumptions/pdf/table_8.2.pdf
        ticksRemaining: 24 * 365 * 4,
        cost: 10000 * 5169,
      },
    ]
    const solarPlants: PlantConstruction[] = [
      {
        plant: createNewPlant({ type: 'solar', capacity: 10000 }),
        // Source https://www.eia.gov/outlooks/aeo/assumptions/pdf/table_8.2.pdf
        ticksRemaining: 24 * 365 * 2,
        cost: 1969 * 10000,
      },
    ]

    return [...coalPlants, ...solarPlants]
  },
)

export const getConstructionsInProgress = (state: GlobalState) => {
  return state[plantConstructions.mountPoint].inProgress
}
