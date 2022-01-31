import { createSelector } from 'reselect'
import * as ticker from '../reducers/ticker'
import { AppState } from '../reducers'

const selectTickerState = (state: AppState): ticker.TickerState => state.tickerReducer

export const selectBidOrders = createSelector(selectTickerState, (order) => order.bid)
export const selectAskOrders = createSelector(selectTickerState, (order) => order.ask)
