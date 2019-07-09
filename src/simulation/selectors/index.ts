import * as common from '../reducers/common'
import * as plants from '../reducers/plants'
import { GlobalState } from '../create-store'
import { Plant } from '../reducers/plants/types'
import * as uuid from 'uuid'
import memoize from 'lodash/memoize'
import getTickDemand from '../demand/get-tick-demand'

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
  (state: GlobalState): Array<Plant> => {
    const coalPlants: Plant[] = [
      {
        id: uuid.v4(),
        age: 0,
        capacity: 10,
        operatingCost: 2,
        idleCost: 1,
        emissions: 4,
        type: 'coal',
      },
    ]
    const solarPlants: Plant[] = [
      {
        id: uuid.v4(),
        age: 0,
        capacity: 3,
        operatingCost: 2,
        idleCost: 2,
        emissions: 4,
        type: 'coal',
      },
    ]

    return [...coalPlants, ...solarPlants]
  },
)
