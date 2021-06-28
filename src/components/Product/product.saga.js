import axios from 'axios'
import { push } from 'connected-react-router'
import { all, takeLatest, call, put, take } from 'redux-saga/effects'
import { alertActions, alertTypes } from '././../Alert/alert.redux'
import { productActions, productTypes } from './product.redux'
import { isEmpty } from './../../util/crud'

export function* getAllProduct() {
  try {
    const url = '/api/product/'
    const { data: product } = yield call(axios.get, url)
    if (isEmpty(product)) {
      yield put(alertActions.alertMessageEmpty('product', '/dashboard/product/create'))
    }
    yield put(productActions.getAllProductSuccess(product))
  } catch (error) {
    yield put(productActions.getAllProductFailure(error))
    console.log(error)
  }
}

export function* getOneProduct({ payload } = {}) {
  try {
    const { id } = payload
    const url = `/api/product/${id}`
    const { data: product } = yield call(axios.get, url)
    yield put(productActions.getOneProductSuccess(product))
  } catch (error) {
    yield put(productActions.getOneProductFailure(error))
    console.log(error)
  }

export function* createProduct({ payload }) {
  try {
    const url = '/api/product/'
    // Make the POST request
    const { data } = yield call(axios.post, url, payload)
    // Add new document to the list
    yield put(productActions.createProductSuccess(data))
    // Show notification
    yield put(alertActions.alertMessageSuccess('Registro guardado'))
    // Return the user to the list
    yield put(push('/dashboard/product/list'))
  } catch (error) {
    yield put(productActions.createProductFailure(error))
    console.log(error)
  }
}

export function* editProduct({ payload } = {}) {
try {
    const { id } = payload
    const url = `/api/product/${id}`
    const { data: product } = yield call(axios.get, url)
    yield put(productActions.editProductSuccess(product))
  } catch (error) {
    yield put(productActions.editProductFailure(error))
    console.log(error)
  }
}

export function* updateProduct({ payload }) {
  try {
    yield put(alertActions.alertPromptShow())
    const prompt = yield take(alertTypes.ALERT_PROMPT_HIDE)

    if (isEmpty(prompt.payload)) return

    const { id, values } = payload
    const url = `/api/product/${id}`

    const historical = { cause: 'Actualización', description: prompt.payload }
    const data = { payload: values, historical }
    const { data: updatedProduct } = yield call(axios.put, url, data)
    yield put(productActions.updateProductSuccess(updatedProduct))
    // Success notification and return the user to the list
    yield put(alertActions.alertMessageSuccess('Registro actualizado'))
    yield put(push('/dashboard/product/list'))
  } catch (error) {
    yield put(productActions.updateProductFailure(error))
    console.log(error)
  }
}

export function* toggleProduct({ payload }) {
  try {
    yield put(alertActions.alertPromptShow())
    const prompt = yield take(alertTypes.ALERT_PROMPT_HIDE)
    const description = prompt.payload

    // The prompt was closed, stop the flow
    if (isEmpty(description)) return

    const { _id, active } = payload
    const url = `/api/product/${_id}`

    // Make the PUT request
    const historical = { cause: active ? 'Desactivación' : 'Activación', description }
    const { data: updatedProduct } = yield call(axios.put, url, {
      payload: { active: !active },
      historical
    })
    yield put(productActions.toggleProductSuccess(updatedProduct))

    // Show success notification
    const result = updatedProduct.active ? 'activado' : 'desactivado'
    yield put(alertActions.alertMessageSuccess(`Registro ${result}`))
    yield put(push('/dashboard/product/list'))
  } catch (error) {
    yield put(productActions.toggleProductFailure(error))
    console.log(error)
  }
}

export function* productSagas() {
  yield all([
    takeLatest(productTypes.PRODUCT_GET_ALL_REQUEST, getAllProduct),
    takeLatest(productTypes.PRODUCT_GET_ONE_REQUEST, getOneProduct),
    takeLatest(productTypes.PRODUCT_CREATE_REQUEST, createProduct),
    takeLatest(productTypes.PRODUCT_EDIT_REQUEST, editProduct),
    takeLatest(productTypes.PRODUCT_UPDATE_REQUEST, updateProduct),
    takeLatest(productTypes.PRODUCT_TOGGLE_REQUEST, toggleProduct)
  ])
}