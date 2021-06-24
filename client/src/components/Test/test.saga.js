import axios from 'axios'
import { push } from 'connected-react-router'
import { call, put, take, all, takeLatest } from 'redux-saga/effects'

import {
  TEST_CREATE_REQUEST,
  TEST_GET_ALL_REQUEST,
  TEST_GET_ONE_REQUEST,
  TEST_UPDATE_REQUEST,
  testCreateSuccess,
  testCreateFailure,
  testGetAllSuccess,
  testGetAllFailure,
  testGetOneSuccess,
  testGetOneFailure,
  testUpdateSuccess,
  testUpdateFailure
} from './test.redux'

export function* testCreate({ payload }) {
  try {
    // POST REQUEST
    const { data } = yield call(axios.post, '/api/tests', payload)
    yield put(testCreateSuccess(data))
    yield alert('registro guardado')
  } catch (error) {
    console.log(error)
    yield put(testCreateFailure('Fail tests create request'))
  }
}

export function* testGetAll() {
  try {
    // GET REQUEST
    const { data } = yield call(axios.get, '/api/tests')
    yield put(testGetAllSuccess(data))
  } catch (error) {
    yield put(testGetAllFailure('Fail tests read many request'))
  }
}

export function* testGetOne({ payload }) {
  try {
    // GET REQUEST
    const { data } = yield call(axios.get, `/api/tests/${payload}`)
    yield put(testGetOneSuccess(data))
  } catch (error) {
    yield put(testGetOneFailure('Fail tests read one request'))
  }
}

export function* testUpdate({ payload }) {
  try {
    // POST REQUEST
    yield call(axios.put, `/api/tests/${payload.id}`, payload)
    yield put(testUpdateSuccess(payload))
    yield alert('Registro actualizado')
  } catch (error) {
    console.log(error)
    yield put(testUpdateFailure('Fail tests update request'))
  }
}

export function* testsSagas() {
  yield all([
    takeLatest(TEST_CREATE_REQUEST, testCreate),
    takeLatest(TEST_GET_ALL_REQUEST, testGetAll),
    takeLatest(TEST_GET_ONE_REQUEST, testGetOne),
    takeLatest(TEST_UPDATE_REQUEST, testUpdate)
  ])
}
