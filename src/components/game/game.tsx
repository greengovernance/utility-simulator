import * as React from 'react'
import Stats from './stats'
import PlantPrioritizer from './plant-prioritizer/index'
import StepButtons from './step-buttons'
import Row from 'reactstrap/lib/Row'
import Col from 'reactstrap/lib/Col'
import PlantConstructor from './plant-constructor'
import ConstructionInProgress from './plant-constructor/construction-in-progress'

const Game: React.SFC<{}> = () => {
  return (
    <div>
      <Stats />
      <div className="my-3">
        <StepButtons />
      </div>
      <div className="my-3">
        <Row>
          <Col md={6}>
            <PlantPrioritizer />
          </Col>
          <Col md={6}>
            <PlantConstructor />
            <ConstructionInProgress />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Game
