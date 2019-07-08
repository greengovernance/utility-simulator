import { ThunkAction } from 'redux-thunk'
import { GlobalState } from './create-store'
import { Action } from 'redux'
import * as common from './reducers/common'
import * as plants from './reducers/plants'

const step: () => ThunkAction<void, GlobalState, undefined, Action> = () => (
  dispatch,
  getState,
) => {
  const state = getState()
  const actions = [...plants.tickActions(state), ...common.tickActions()]
  for (const a of actions) {
    dispatch(a)
  }
}

export default step
