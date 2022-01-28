import { AnyAction } from 'redux'
import { TickerActionTypes } from '../actions/TickerActions'

const initialState = {
  orders: [],
  error: '',
}

export interface OrderState {
  ask: Number
  askSize: Number
  bid: Number
  bidSize: Number
  last: Number
  time: Number
}

export interface TickerState {
  orders: OrderState[]
  error: string
}

// eslint-disable-next-line @typescript-eslint/default-param-last
export default function tickerReducer(state: TickerState = initialState, action: AnyAction) {
  switch (action?.type) {
    case TickerActionTypes.CONNECT_WS:
      return state

    case TickerActionTypes.SUCCESS_CONNECT_WS:
      return {
        ...state,
        error: '',
      }

    case TickerActionTypes.ERROR_CONNECT_WS:
      return {
        ...state,
        error: action.payload.error,
      }

    case TickerActionTypes.GET_MESSAGE:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      }

    case TickerActionTypes.CLOSE_CONNECT_WS:
      return state

    case TickerActionTypes.SUCCESS_CLOSE_CONNECT_WS:
      return {
        ...state,
        error: '',
      }

    case TickerActionTypes.ERROR_CLOSE_CONNECT_WS:
      return {
        ...state,
        error: action.payload.error,
      }

    default:
      return state
  }
}
