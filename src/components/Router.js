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
<<<<<<< HEAD

import Home from 'Routes/Home'
import Store from 'Routes/Store'
import Login from 'Routes/Login'
import SignUp from 'Routes/SignUp'
import Detail from 'Routes/StoreDetail';
=======
import Home from 'Routes/Home'
import Store from 'Routes/Store'

>>>>>>> dc3c133f72496a291826545f0b7cd4ff4e951b4f

export default () => (
  <Router>
    <>
    {/* Switch: 두개의 컴포넌트가 랜더링되는것을 막아줌 */}
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/teahouse' component={TeaHouse} />
      <Route path='/incenseshop' component={IncenseShop} />
      <Route path='/contact' component={Contact} />
<<<<<<< HEAD
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Route path='/detail' component={Detail} />
=======
>>>>>>> dc3c133f72496a291826545f0b7cd4ff4e951b4f
      {/* 입력한 주소가 라우터에 없는값일시 Home 으로 리턴 */}
      <Redirect from-='*' to='/' />
    </Switch>
    </>
  </Router>
);
