import { AnyAction } from 'redux'
import { errorCloseWS, TickerActionTypes } from '../actions/TickerActions'

const initialState = {
  ask: [],
  bid: [],
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
  ask: MessageState[]
  bid: MessageState[]
  error: string
}

export interface MessageState {
  value: Number
  size: Number
  time: Number
  first: Boolean
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
      const { ask, askSize, bid, bidSize, time } = action.payload

      const askRepeat = state.ask.find((elem) => elem.value === ask)
      const bidRepeat = state.bid.find((elem) => elem.value === bid)

      const askObj = askRepeat
        ? [...state.ask]
        : [...state.ask, { value: ask, size: askSize, time, first: true }]
      const bidObj = bidRepeat
        ? [...state.bid]
        : [...state.bid, { value: bid, size: bidSize, time, first: true }]

      askObj.sort((a, b) => b.value - a.value)
      bidObj.sort((a, b) => b.value - a.value)

      return {
        ...state,
        ask: askObj.slice(0, 20),
        bid: bidObj.slice(0, 20),
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
