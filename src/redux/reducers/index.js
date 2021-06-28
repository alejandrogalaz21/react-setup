/* PLOP_INJECT_IMPORT */
import { post } from './../../components/Post/post.redux'
import { combineReducers } from 'redux'
import { app } from './app.reducer'
import { router } from './router.reducer'

export default combineReducers({
  /* PLOP_INJECT_EXPORT */
	post,
  app,
  router
})
