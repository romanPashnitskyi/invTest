import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainPage from '../pages/MainPage'
import SecondPage from '../pages/SecondPage'
import ThirdPage from '../pages/ThirdPage'

const Routes = () => {
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={ MainPage } />
          <Route path='/second' component={ SecondPage } />
          <Route path='/third' component={ ThirdPage } />
        </Switch>
      </Router>
  )
};

export default Routes;
