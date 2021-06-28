// Type's
export const POST_GET_ALL_REQUEST = 'POST_GET_ALL_REQUEST'
export const POST_GET_ALL_SUCCESS = 'POST_GET_ALL_SUCCESS'
export const POST_GET_ALL_FAILURE = 'POST_GET_ALL_FAILURE'

export const POST_CREATE_REQUEST = 'POST_CREATE_REQUEST'
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS'
export const POST_CREATE_FAILURE = 'POST_CREATE_FAILURE'

export const POST_GET_ONE_REQUEST = 'POST_GET_ONE_REQUEST'
export const POST_GET_ONE_SUCCESS = 'POST_GET_ONE_SUCCESS'
export const POST_GET_ONE_FAILURE = 'POST_GET_ONE_FAILURE'

export const POST_UPDATE_REQUEST = 'POST_UPDATE_REQUEST'
export const POST_UPDATE_SUCCESS = 'POST_UPDATE_SUCCESS'
export const POST_UPDATE_FAILURE = 'POST_UPDATE_FAILURE'

export const POST_REMOVE_REQUEST = 'POST_REMOVE_REQUEST'
export const POST_REMOVE_SUCCESS = 'POST_REMOVE_SUCCESS'
export const POST_REMOVE_FAILURE = 'POST_REMOVE_FAILURE'

// Action's
export const postgetAllRequest = () => ({ type: POST_GET_ALL_REQUEST })
export const postgetAllSuccess = payload => ({
  type: POST_GET_ALL_REQUEST,
  payload
})
export const postgetAllFailure = error => ({
  type: POST_GET_ALL_REQUEST,
  error
})

export const postCreateRequest = payload => ({ type: POST_CREATE_REQUEST, payload })
export const postCreateSuccess = payload => ({ type: POST_CREATE_SUCCESS, payload })
export const postCreateFailure = error => ({ type: POST_CREATE_FAILURE, error })

export const postGetOneRequest = id => ({ type: POST_GET_ONE_REQUEST, id })
export const postGetOneSuccess = payload => ({ type: POST_GET_ONE_SUCCESS, payload })
export const postGetOneFailure = error => ({ type: POST_GET_ONE_FAILURE, error })

export const postUpdateRequest = (id, payload) => ({ type: POST_UPDATE_REQUEST, id, payload })
export const postUpdateSuccess = payload => ({ type: POST_UPDATE_SUCCESS, payload })
export const postUpdateFailure = error => ({ type: POST_UPDATE_FAILURE, error })

export const postRemoveRequest = id => ({ type: POST_REMOVE_REQUEST, id })
export const postRemoveSuccess = payload => ({ type: POST_REMOVE_SUCCESS, payload })
export const postRemoveFailure = error => ({ type: POST_REMOVE_FAILURE, error })

// Reducer
const INITIAL_STATE = {
  one: {},
  all: [],
  loading: false,
  error: null
}

export function post(state = INITIAL_STATE, action) {
  switch (action.type) {
    case POST_CREATE_SUCCESS:
      return { ...state, error: null, loading: false, all: [...state.many, action.payload]}
    case POST_GET_ALL_SUCCESS:
      return { ...state, error: null, loading: false, all: [...action.payload] }
    case POST_GET_ONE_SUCCESS:
      return { ...state, error: null, loading: false, one: { ...action.payload } }
    case POST_UPDATE_SUCCESS:
      return {
        ...state,
        all: [...state.many.filter(s => s.id !== action.payload.id), action.payload],
        one: {},
        error: null, loading: false,
      }
    case POST_REMOVE_SUCCESS:
      return { ...state, error: null, loading: false, all: [...state.many.filter(s => s.id !== action.payload.id)] }
    case POST_CREATE_FAILURE:
    case POST_GET_ALL_FAILURE:
    case POST_GET_ONE_FAILURE:
    case POST_UPDATE_FAILURE:
    case POST_REMOVE_FAILURE:
      return {...state, loading: false, error: action.error }
    case POST_CREATE_REQUEST:
    case POST_GET_ALL_REQUEST:
    case POST_GET_ONE_REQUEST:
    case POST_UPDATE_REQUEST:
    case POST_REMOVE_REQUEST:
      return {...state, loading: true, error: null }  
    default:
      return state
  }
}