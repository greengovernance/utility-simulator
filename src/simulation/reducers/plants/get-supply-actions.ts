import { GlobalState } from '../../create-store'
import { SupplyPowerPayload } from './actions/supply-power'
import { getPrioritizedPlants } from '../../selectors'

const getSupplyActions = (
  state: GlobalState,
  demand: number,
): SupplyPowerPayload[] => {
  let quantitySoFar = 0
  const events: SupplyPowerPayload[] = []
  const plants = getPrioritizedPlants(state)
  for (const plant of plants) {
    if (quantitySoFar < demand) {
      if (quantitySoFar + plant.capacity <= demand) {
        // Need to run this power plant at full capacity.
        events.push({
          energy: plant.capacity,
          cost: plant.operatingCost,
          emissions: plant.emissions,
        })
        quantitySoFar += plant.capacity
      } else {
        // Need to run this plant at partial capacity.
        const energyNeeded = demand - quantitySoFar
        events.push({
          energy: energyNeeded,
          cost:
            (energyNeeded / plant.capacity) * plant.operatingCost +
            (1 - energyNeeded / plant.capacity) * plant.idleCost,
          emissions: (energyNeeded / plant.capacity) * plant.emissions,
        })
        quantitySoFar += energyNeeded
      }
    } else {
      // Plant is idle.
      events.push({
        energy: 0,
        cost: plant.idleCost,
        emissions: 0,
      })
    }
  }
  return events
}

export default getSupplyActions
