import { AnyAction } from 'redux'
import { TickerActionTypes } from '../actions/TickerActions'

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

      const askIndex = state.ask.findIndex((elem) => elem.value === ask)
      const bidIndex = state.bid.findIndex((elem) => elem.value === bid)

      let askObj
      let bidObj
      if (askIndex !== -1) {
        state.ask[askIndex] = {
          value: ask,
          size: askSize,
          time,
        }
        askObj = [...state.ask]
      } else {
        askObj = [...state.ask, { value: ask, size: askSize, time }]
      }

      if (bidIndex !== -1) {
        state.bid[bidIndex] = {
          value: bid,
          size: bidSize,
          time,
        }
        bidObj = [...state.bid]
      } else {
        bidObj = [...state.bid, { value: bid, size: bidSize, time }]
      }

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
