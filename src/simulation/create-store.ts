import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as plants from './reducers/plants'
import * as plantConstructions from './reducers/plant-constructions'
import * as common from './reducers/common'
import thunk from 'redux-thunk'

export interface GlobalState {
  [common.mountPoint]: common.State
  [plants.mountPoint]: plants.State
  [plantConstructions.mountPoint]: plantConstructions.State
}

const reducer = combineReducers({
  [common.mountPoint]: common.reducer,
  [plants.mountPoint]: plants.reducer,
  [plantConstructions.mountPoint]: plantConstructions.reducer,
})

export default () => {
  const store = createStore(reducer, applyMiddleware(thunk))
  return store
}
