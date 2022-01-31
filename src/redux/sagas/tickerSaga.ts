import { put, call } from 'redux-saga/effects'
import { AnyAction } from 'redux'
import * as TickerActionTypes from '../actions/TickerActions'
import * as apiWS from '../../api/websocket'

export function* connectWS(action: AnyAction) {
  try {
    yield call(apiWS.connectWS, action.payload.callback)
    yield put(TickerActionTypes.successConnectWS())
  } catch (e) {
    yield put(TickerActionTypes.errorConnectWS(e))
  }
}

export function* closeWS() {
  try {
    yield call(apiWS.closeWS)
    yield put(TickerActionTypes.successCloseWS())
  } catch (e) {
    yield put(TickerActionTypes.errorCloseWS(e))
  }
}
