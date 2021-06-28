import { combineReducers } from 'redux'
import { app } from './app.reducer'
import { router } from './router.reducer'

export default combineReducers({
  /* PLOP_INJECT_IMPORT */
  app,
  router
})
