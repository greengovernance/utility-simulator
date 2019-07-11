import { GlobalState } from '../../create-store'
import { Plant } from './types'
import { getTick } from '../../selectors'
import solarIndex from './solar-index'

const getTickCapacity = (plant: Plant, ticksAhead = 0) => (
  state: GlobalState,
) => {
  if (plant.type === 'solar') {
    const tick = getTick(state)
    return solarIndex[(tick + ticksAhead) % (365 * 24)] * plant.capacity
  }
  return plant.capacity
}

export default getTickCapacity
