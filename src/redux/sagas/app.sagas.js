import axios from 'axios'
import { push } from 'connected-react-router'
import { all, takeLatest, put, select, call } from 'redux-saga/effects'

export function* initAppSaga(action) {
  const lang = navigator.language

  yield console.log('initAppSaga')
  console.log({ lang })

  console.log(navigator.geolocation)

  yield alert('SAGAS RUNING')
}

export function* checkRouterSaga(action) {
  yield alert('YOU WILL BE REDIRECT')
  yield put(push('/about'))
}

export function* appSagas() {
  yield all([takeLatest('INIT_APP', initAppSaga), takeLatest('CHEK_ROUTER', checkRouterSaga)])
}
