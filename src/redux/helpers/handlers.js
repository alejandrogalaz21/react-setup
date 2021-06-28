import { addItem, updatedItem, deleteItem } from './../../util/crud'

// Add the returned document to the list
export const createSuccess = (state, action) => ({
  ...state,
  list: addItem(state.list, action.payload)
})

// Load the list of all records, set the loading to false
export const getAllSuccess = (state, action) => ({ ...state, list: [...action.payload] })

// Set the returned single document into the view property
export const getOneSuccess = (state, action) => ({ ...state, view: { ...action.payload } })

// Load the returned document into the edit property in order to edit it
export const editSuccess = (state, action) => ({ ...state, edit: { ...action.payload } })

// Successfully update the list
export const updateSuccess = (state, action) => ({
  ...state,
  list: updatedItem('id')(state.list, action.payload)
})

// Successfully toggle a document an incorpore its updated version to the list
export const toggleSuccess = (state, action) => {
  const item = action.payload
  const list = state.list
  const index = list.findIndex(i => i.id === item.id)

  return {
    ...state,
    list: [
      ...list.slice(0, index),
      { ...list[index], active: item.active },
      ...list.slice(index + 1)
    ]
  }
}

// Delete a document from the list
export const deleteSuccess = (state, action) => ({
  ...state,
  list: deleteItem(state.list, action.payload)
})
