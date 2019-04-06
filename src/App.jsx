/*
* This file is the root component
* */

import React, {Component} from 'react'

import {BrowserRouter as Router ,Route,Switch  } from 'react-router-dom'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'

export default class App extends Component {
  render () {
    return (
      <div>
        <Router>
          <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/admin' component={Admin}/>
          </Switch>
        </Router>
      </div>
    )
  }
}