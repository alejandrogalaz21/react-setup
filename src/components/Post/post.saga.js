import axios from 'axios'
import { push } from 'connected-react-router'
import { all, takeLatest, call, put, take } from 'redux-saga/effects'
import { alertActions, alertTypes } from '././../Alert/alert.redux'
import { postActions, postTypes } from './post.redux'
import { isEmpty } from './../../util/crud'

export function* getAllPost() {
  try {
    const url = '/api/post/'
    const { data: post } = yield call(axios.get, url)
    if (isEmpty(post)) {
      yield put(alertActions.alertMessageEmpty('post', '/dashboard/post/create'))
    }
    yield put(postActions.getAllPostSuccess(post))
  } catch (error) {
    yield put(postActions.getAllPostFailure(error))
    console.log(error)
  }
}

export function* getOnePost({ payload } = {}) {
  try {
    const { id } = payload
    const url = `/api/post/${id}`
    const { data: post } = yield call(axios.get, url)
    yield put(postActions.getOnePostSuccess(post))
  } catch (error) {
    yield put(postActions.getOnePostFailure(error))
    console.log(error)
  }

export function* createPost({ payload }) {
  try {
    const url = '/api/post/'
    // Make the POST request
    const { data } = yield call(axios.post, url, payload)
    // Add new document to the list
    yield put(postActions.createPostSuccess(data))
    // Show notification
    yield put(alertActions.alertMessageSuccess('Registro guardado'))
    // Return the user to the list
    yield put(push('/dashboard/post/list'))
  } catch (error) {
    yield put(postActions.createPostFailure(error))
    console.log(error)
  }
}

export function* editPost({ payload } = {}) {
try {
    const { id } = payload
    const url = `/api/post/${id}`
    const { data: post } = yield call(axios.get, url)
    yield put(postActions.editPostSuccess(post))
  } catch (error) {
    yield put(postActions.editPostFailure(error))
    console.log(error)
  }
}

export function* updatePost({ payload }) {
  try {
    yield put(alertActions.alertPromptShow())
    const prompt = yield take(alertTypes.ALERT_PROMPT_HIDE)

    if (isEmpty(prompt.payload)) return

    const { id, values } = payload
    const url = `/api/post/${id}`

    const historical = { cause: 'Actualización', description: prompt.payload }
    const data = { payload: values, historical }
    const { data: updatedPost } = yield call(axios.put, url, data)
    yield put(postActions.updatePostSuccess(updatedPost))
    // Success notification and return the user to the list
    yield put(alertActions.alertMessageSuccess('Registro actualizado'))
    yield put(push('/dashboard/post/list'))
  } catch (error) {
    yield put(postActions.updatePostFailure(error))
    console.log(error)
  }
}

export function* togglePost({ payload }) {
  try {
    yield put(alertActions.alertPromptShow())
    const prompt = yield take(alertTypes.ALERT_PROMPT_HIDE)
    const description = prompt.payload

    // The prompt was closed, stop the flow
    if (isEmpty(description)) return

    const { _id, active } = payload
    const url = `/api/post/${_id}`

    // Make the PUT request
    const historical = { cause: active ? 'Desactivación' : 'Activación', description }
    const { data: updatedPost } = yield call(axios.put, url, {
      payload: { active: !active },
      historical
    })
    yield put(postActions.togglePostSuccess(updatedPost))

    // Show success notification
    const result = updatedPost.active ? 'activado' : 'desactivado'
    yield put(alertActions.alertMessageSuccess(`Registro ${result}`))
    yield put(push('/dashboard/post/list'))
  } catch (error) {
    yield put(postActions.togglePostFailure(error))
    console.log(error)
  }
}

export function* postSagas() {
  yield all([
    takeLatest(postTypes.POST_GET_ALL_REQUEST, getAllPost),
    takeLatest(postTypes.POST_GET_ONE_REQUEST, getOnePost),
    takeLatest(postTypes.POST_CREATE_REQUEST, createPost),
    takeLatest(postTypes.POST_EDIT_REQUEST, editPost),
    takeLatest(postTypes.POST_UPDATE_REQUEST, updatePost),
    takeLatest(postTypes.POST_TOGGLE_REQUEST, togglePost)
  ])
}