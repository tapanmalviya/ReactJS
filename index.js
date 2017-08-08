import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/App'

import Sales from './modules/Sales'
import Expenses from './modules/Expenses'
import Inventory from './modules/Inventory'
import Item from './modules/Item'


render((
  <Router history={hashHistory}>
  <App/>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/app" component={App}/>
    <Route path="/sales" component={Sales}/>
    <Route path="/expenses" component={Expenses}/>
	<Route path="/inventory" component={Inventory}/>
	<Route path="/item" component={Item}/>
  </Router>
), document.getElementById('app'))