import { createActions, createReducer } from 'reduxsauce'
import * as handlers from './../../redux/helpers/handlers'

const { Types, Creators } = createActions(
{
  getAllPostRequest: ['payload'],
  getAllPostSuccess: ['payload'],
  getAllPostFailure: ['payload'],

  getOnePostRequest: ['payload'],
  getOnePostSuccess: ['payload'],
  getOnePostFailure: ['payload'],

  createPostRequest: ['payload'],
  createPostSuccess: ['payload'],
  createPostFailure: ['payload'],

  editPostRequest: ['payload'],
  editPostSuccess: ['payload'],
  editPostFailure: ['payload'],

  updatePostRequest: ['payload'],
  updatePostSuccess: ['payload'],
  updatePostFailure: ['payload'],

  togglePostRequest: ['payload'],
  togglePostSuccess: ['payload'],
  togglePostFailure: ['payload'],

  deletePostRequest: ['payload'],
  deletePostSuccess: ['payload'],
  deletePostFailure: ['payload']
},
{}
)

const initialState = {
  list: [],
  view: {},
  edit: {},
  loading: {}
}

export const HANDLERS = {
  [Types.POST_GET_ALL_SUCCESS]: handlers.getAllSuccess,
  [Types.POST_GET_ONE_SUCCESS]: handlers.getOneSuccess,
  [Types.POST_CREATE_SUCCESS]: handlers.createSuccess,
  [Types.POST_EDIT_SUCCESS]: handlers.editSuccess,
  [Types.POST_UPDATE_SUCCESS]: handlers.updateSuccess,
  [Types.POST_TOGGLE_SUCCESS]: handlers.toggleSuccess,
  [Types.POST_DELETE_SUCCESS]: handlers.deleteSuccess
}

export const postTypes = Types
export const postActions = Creators
export const post = createReducer(initialState, HANDLERS)