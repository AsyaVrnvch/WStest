import { createSelector } from 'reselect'
import * as ticker from '../reducers/ticker'
import { AppState } from '../reducers'

const selectTickerState = (state: AppState): ticker.TickerState => state.tickerReducer

export const selectAllOrders = createSelector(selectTickerState, (state) => state.orders)
