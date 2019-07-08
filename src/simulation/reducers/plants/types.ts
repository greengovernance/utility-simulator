export interface State {
  totalEmissions: number
  totalCosts: number
  totalUnderSuppliedEnergy: number
  energySupplyThisTick: number
  energyDemandThisTick: number
  prioritizedPlants: Plant[]
}

export interface Plant {
  id: string
  type: 'solar' | 'coal'
  capacity: number
  age: number
  operatingCost: number
  idleCost: number
  emissions: number
}
