import { createBrowserHistory } from 'history'
import { connectRouter } from 'connected-react-router'
const history = createBrowserHistory()
export const router = connectRouter(history)
