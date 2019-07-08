import * as React from 'react'
import Stats from './stats'
import PlantPrioritizer from './plant-prioritizer/index'

const Game: React.SFC<{}> = () => {
  return (
    <div>
      <h1>Power the city</h1>
      <Stats />
      <PlantPrioritizer />
    </div>
  )
}

export default Game
