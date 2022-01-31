import { createAction } from 'redux-actions'
import { OrderState } from '../reducers/ticker'

export enum TickerActionTypes {
  CONNECT_WS = '[Ticker] CONNECT_WS',
  SUCCESS_CONNECT_WS = '[Ticker] SUCCESS_CONNECT_WS',
  ERROR_CONNECT_WS = '[Ticker] ERROR_CONNECT_WS',

  GET_MESSAGE = '[Ticker] GET_MESSAGE',

  CLOSE_CONNECT_WS = '[Ticker] CLOSE_CONNECT_WS',
  SUCCESS_CLOSE_CONNECT_WS = '[Ticker] SUCCESS_CLOSE_CONNECT_WS',
  ERROR_CLOSE_CONNECT_WS = '[Ticker] ERROR_CLOSE_CONNECT_WS',
}

export const connectWS = createAction(
  TickerActionTypes.CONNECT_WS,
  (payload: { callback: (data: OrderState) => void }) => payload
)

export const successConnectWS = createAction(TickerActionTypes.SUCCESS_CONNECT_WS)

export const errorConnectWS = createAction(
  TickerActionTypes.ERROR_CONNECT_WS,
  (payload: { error: string }) => payload
)

export const getMessage = createAction(TickerActionTypes.GET_MESSAGE)

export const closeWS = createAction(TickerActionTypes.CLOSE_CONNECT_WS)
export const successCloseWS = createAction(TickerActionTypes.SUCCESS_CLOSE_CONNECT_WS)
export const errorCloseWS = createAction(
  TickerActionTypes.ERROR_CLOSE_CONNECT_WS,
  (payload: { error: string }) => payload
)
