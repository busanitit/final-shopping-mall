/* eslint-disable import/no-anonymous-default-export */
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
import Users from 'Routes/Users'

import Home from 'Routes/Home'
import Store from 'Routes/Store'
import Login from 'Routes/Login'
import SignUp from 'Routes/SignUp'
import Detail from 'Routes/StoreDetail';

export default () => (
  <Router>
    <>
      {/* Switch: 두개의 컴포넌트가 랜더링되는것을 막아줌 */}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/teahouse' component={TeaHouse} />
        <Route path='/incenseshop' component={IncenseShop} />
        <Route path='/store' component={Store} />
        <Route path='/contact' component={Contact} />
        <Route path='/detail' component={Detail} />
        {/* <Route path="/title/:id" component={Detail} />
        <Route path="/price/:id" component={Detail} />
        <Route path="/image/:id" component={Detail} /> */}
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/users' component={Users} />
        {/* 입력한 주소가 라우터에 없는값일시 Home 으로 리턴 */}
        <Redirect from-='*' to='/' />
      </Switch>
    </>
  </Router>
);
