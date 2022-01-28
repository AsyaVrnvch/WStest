import { combineReducers } from 'redux'
import tickerReducer, { TickerState } from './ticker'

export interface AppState {
  tickerReducer: TickerState
}

export default combineReducers({
  tickerReducer,
})
