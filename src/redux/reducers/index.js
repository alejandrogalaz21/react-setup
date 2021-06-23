import { combineReducers } from 'redux'
import { app } from './app.reducer'
import { router } from './router.reducer'

export default combineReducers({
  app,
  router
})
