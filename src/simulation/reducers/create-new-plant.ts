import { Plant } from './plants/types'
import uuid from 'uuid'

const createNewPlant = (preset: Pick<Plant, 'capacity' | 'type'>): Plant => {
  if (preset.type === 'coal') {
    // Costs source: https://www.eia.gov/electricity/annual/html/epa_08_04.html
    const fixedCostsPerKwh = 5.13 / 1000 // maintenance
    const operatingCostsPerKwh =
      25.27 / 1000 + // fuel
      5.01 / 1000 // operation

    return {
      id: uuid.v4(),
      capacity: preset.capacity,
      type: 'coal',
      operatingCost:
        (operatingCostsPerKwh + fixedCostsPerKwh) * preset.capacity,
      idleCost: fixedCostsPerKwh * preset.capacity,
      age: 0,
      // From "emissions2017.xlsx" https://www.eia.gov/electricity/data/emissions/
      // Filters: NYIS Electric Power COAL
      // Metric: Metric Tonnes of CO2 emissions / Generation
      emissions: 0.001041858347334 * preset.capacity,
    }
  }

  // TODO: Fix this number. Not sure if per kwh is right metric? and not sure how to find marginal cost -- not including cost of construction
  // Assuming maintenance is 10% of that of coal plant
  const solarCostsPerKwh = 0.000513
  return {
    id: uuid.v4(),
    capacity: preset.capacity,
    type: 'solar',
    operatingCost: solarCostsPerKwh * preset.capacity,
    idleCost: solarCostsPerKwh * preset.capacity,
    age: 0,
    emissions: 0,
  }
}

export default createNewPlant
