import * as React from 'react'
import createStore from '../../simulation/create-store'
import { Provider } from 'react-redux'
import Game from './game'

const GameContainer: React.SFC<{}> = () => {
  const [store] = React.useState(createStore())
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  )
}

export default GameContainer
