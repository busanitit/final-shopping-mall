import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import About from "Routes/About";
import TeaHouse from "Routes/TeaHouse";
import IncenseShop from "Routes/IncenseShop";
import Contact from "Routes/Contact";
import Home from 'Routes/Home'
import Store from 'Routes/Store'

export default () => (
  <Router>
    <>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      <Route path='/teahouse' exact component={TeaHouse} />
      <Route path='/incenseshop' component={IncenseShop} />
      <Route path='/store' component={Store} />
      <Route path='/contact' component={Contact} />
      <Redirect from-='*' to='/' />
    </Switch>
    </>
  </Router>
);
