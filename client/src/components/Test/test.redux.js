// Type's
export const TEST_CREATE_REQUEST = 'TEST_CREATE_REQUEST'
export const TEST_CREATE_SUCCESS = 'TEST_CREATE_SUCCESS'
export const TEST_CREATE_FAILURE = 'TEST_CREATE_FAILURE'

export const TEST_GET_ALL_REQUEST = 'TEST_GET_ALL_REQUEST'
export const TEST_GET_ALL_SUCCESS = 'TEST_GET_ALL_SUCCESS'
export const TEST_GET_ALL_FAILURE = 'TEST_GET_ALL_FAILURE'

export const TEST_GET_ONE_REQUEST = 'TEST_GET_ONE_REQUEST'
export const TEST_GET_ONE_SUCCESS = 'TEST_GET_ONE_SUCCESS'
export const TEST_GET_ONE_FAILURE = 'TEST_GET_ONE_FAILURE'

export const TEST_UPDATE_REQUEST = 'TEST_UPDATE_REQUEST'
export const TEST_UPDATE_SUCCESS = 'TEST_UPDATE_SUCCESS'
export const TEST_UPDATE_FAILURE = 'TEST_UPDATE_FAILURE'

export const TEST_REMOVE_REQUEST = 'TEST_REMOVE_REQUEST'
export const TEST_REMOVE_SUCCESS = 'TEST_REMOVE_SUCCESS'
export const TEST_REMOVE_FAILURE = 'TEST_REMOVE_FAILURE'

// Action's
export const testCreateRequest = payload => ({
  type: TEST_CREATE_REQUEST,
  payload
})
export const testCreateSuccess = payload => ({ type: TEST_CREATE_SUCCESS, payload })
export const testCreateFailure = (payload = null) => ({
  type: TEST_CREATE_FAILURE,
  payload
})

export const testGetAllRequest = payload => ({
  type: TEST_GET_ALL_REQUEST,
  payload
})
export const testGetAllSuccess = payload => ({
  type: TEST_GET_ALL_SUCCESS,
  payload
})
export const testGetAllFailure = (payload = null) => ({
  type: TEST_GET_ALL_FAILURE,
  payload
})

export const testGetOneRequest = payload => ({
  type: TEST_GET_ONE_REQUEST,
  payload
})
export const testGetOneSuccess = payload => ({ type: TEST_GET_ONE_SUCCESS, payload })
export const testGetOneFailure = (payload = null) => ({
  type: TEST_GET_ONE_FAILURE,
  payload
})

export const testUpdateRequest = payload => ({
  type: TEST_UPDATE_REQUEST,
  payload
})
export const testUpdateSuccess = payload => ({ type: TEST_UPDATE_SUCCESS, payload })
export const testUpdateFailure = (payload = null) => ({
  type: TEST_UPDATE_FAILURE,
  payload
})

export const testRemoveRequest = payload => ({
  type: TEST_REMOVE_REQUEST,
  payload
})
export const testRemoveSuccess = payload => ({ type: TEST_REMOVE_SUCCESS, payload })
export const testRemoveFailure = (payload = null) => ({
  type: TEST_REMOVE_FAILURE,
  payload
})

// Reducer
const INITIAL_STATE = {
  one: {},
  all: []
}

export function tests(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TEST_CREATE_SUCCESS:
      return { ...state, many: [...state.many, action.payload] }
    case TEST_GET_ALL_SUCCESS:
      return { ...state, many: [...action.payload] }
    case TEST_GET_ONE_SUCCESS:
      return { ...state, one: { ...action.payload } }
    case TEST_UPDATE_SUCCESS:
      return {
        ...state,
        many: [...state.many.filter(s => s.id !== action.payload.id), action.payload]
      }
    case TEST_REMOVE_SUCCESS:
      return { ...state, many: [...state.many.filter(s => s.id !== action.payload.id)] }
    case TEST_CREATE_FAILURE:
    case TEST_GET_ALL_FAILURE:
    case TEST_GET_ONE_FAILURE:
    case TEST_UPDATE_FAILURE:
    case TEST_REMOVE_FAILURE:
      alert(action.payload)
      return state
    default:
      return state
  }
}
