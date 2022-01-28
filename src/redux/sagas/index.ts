import { takeEvery, all } from 'redux-saga/effects'
import * as tickerSaga from './tickerSaga'
import { TickerActionTypes } from '../actions/TickerActions'

export default function* rootSaga() {
  yield all([
    takeEvery(TickerActionTypes.CONNECT_WS, tickerSaga.connectWS),
    takeEvery(TickerActionTypes.CLOSE_CONNECT_WS, tickerSaga.closeWS),
  ])
}
