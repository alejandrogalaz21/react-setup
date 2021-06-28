import { createActions, createReducer } from 'reduxsauce'
import * as handlers from './../../redux/helpers/handlers'

const { Types, Creators } = createActions(
{
  getAllProductRequest: ['payload'],
  getAllProductSuccess: ['payload'],
  getAllProductFailure: ['payload'],

  getOneProductRequest: ['payload'],
  getOneProductSuccess: ['payload'],
  getOneProductFailure: ['payload'],

  createProductRequest: ['payload'],
  createProductSuccess: ['payload'],
  createProductFailure: ['payload'],

  editProductRequest: ['payload'],
  editProductSuccess: ['payload'],
  editProductFailure: ['payload'],

  updateProductRequest: ['payload'],
  updateProductSuccess: ['payload'],
  updateProductFailure: ['payload'],

  toggleProductRequest: ['payload'],
  toggleProductSuccess: ['payload'],
  toggleProductFailure: ['payload'],

  deleteProductRequest: ['payload'],
  deleteProductSuccess: ['payload'],
  deleteProductFailure: ['payload']
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
  [Types.PRODUCT_GET_ALL_SUCCESS]: handlers.getAllSuccess,
  [Types.PRODUCT_GET_ONE_SUCCESS]: handlers.getOneSuccess,
  [Types.PRODUCT_CREATE_SUCCESS]: handlers.createSuccess,
  [Types.PRODUCT_EDIT_SUCCESS]: handlers.editSuccess,
  [Types.PRODUCT_UPDATE_SUCCESS]: handlers.updateSuccess,
  [Types.PRODUCT_TOGGLE_SUCCESS]: handlers.toggleSuccess,
  [Types.PRODUCT_DELETE_SUCCESS]: handlers.deleteSuccess
}

export const productTypes = Types
export const productActions = Creators
export const product = createReducer(initialState, HANDLERS)