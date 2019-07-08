import { createStore, combineReducers } from 'redux'
import * as plants from './reducers/plants'
import * as common from './reducers/common'

export interface GlobalState {
  [common.mountPoint]: common.State
  [plants.mountPoint]: plants.State
}

const reducer = combineReducers({
  [common.mountPoint]: common.reducer,
  [plants.mountPoint]: plants.reducer,
})

export default () => {
  const store = createStore(reducer)
  return store
}
