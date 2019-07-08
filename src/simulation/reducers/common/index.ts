import { createAction, createReducer } from 'redux-act'

export interface State {
  tick: number
}

const initialState = (): State => ({
  tick: 0,
})

export const actions = {
  nextTick: createAction(),
}

export const reducer = createReducer<State>({}, initialState())
reducer.on(actions.nextTick, (state) => ({ tick: state.tick + 1 }))

export const tickActions = () => {
  return [actions.nextTick()]
}

export const mountPoint: 'common' = 'common'
