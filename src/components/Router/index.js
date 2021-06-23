import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routes } from './routes'

import { ConnectedRouter } from 'connected-react-router'
import { history } from './../../redux/configureStore'

import ScrollTop from './../ScrollTop'

function Router() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} exact path={route.path} component={route.component} />
        ))}
      </Switch>
      <ScrollTop />
    </ConnectedRouter>
  )
}

export default Router
