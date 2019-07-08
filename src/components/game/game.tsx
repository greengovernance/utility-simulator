import * as React from 'react'
import Stats from './stats'
import PlantPrioritizer from './plant-prioritizer/index'
import StepButtons from './step-buttons'

const Game: React.SFC<{}> = () => {
  return (
    <div>
      <h1>Power the city</h1>
      <Stats />
      <StepButtons />
      <PlantPrioritizer />
    </div>
  )
}

export default Game
