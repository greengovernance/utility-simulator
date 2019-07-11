import { GlobalState } from '../../create-store'
import { SupplyPowerPayload } from './actions/supply-power'
import { getPrioritizedPlants } from '../../selectors'

const getSupplyAction = (
  state: GlobalState,
  demand: number,
): SupplyPowerPayload => {
  let quantitySoFar = 0
  const plants = getPrioritizedPlants(state)
  let cost = 0
  let energy = 0
  let emissions = 0
  for (const plant of plants) {
    if (quantitySoFar < demand) {
      if (quantitySoFar + plant.capacity <= demand) {
        // Need to run this power plant at full capacity.
        energy += plant.capacity
        cost += plant.operatingCost
        emissions += plant.emissions
        quantitySoFar += plant.capacity
      } else {
        // Need to run this plant at partial capacity.
        const energyNeeded = demand - quantitySoFar
        ;(energy += energyNeeded),
          (cost +=
            (energyNeeded / plant.capacity) * plant.operatingCost +
            (1 - energyNeeded / plant.capacity) * plant.idleCost),
          (emissions += (energyNeeded / plant.capacity) * plant.emissions),
          (quantitySoFar += energyNeeded)
      }
    } else {
      // Plant is idle.
      cost += plant.idleCost
    }
  }
  return {
    energy,
    cost,
    emissions,
  }
}

export default getSupplyAction
