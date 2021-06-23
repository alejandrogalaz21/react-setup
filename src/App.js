import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import Router from './components/Router'

const store = configureStore()

if (process.env.REACT_APP_ENV !== 'production') {
  console.log(process.env.REACT_APP_ENV)
  window.store = store
  window.state = store.getState()
}

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
