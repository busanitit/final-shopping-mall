import React, { Component } from 'react';

class Header extends Component {
  render () {
      return (
        <nav class="navbar navbar-expand-md bg-dark navbar-dark" >
            <a class="navbar-brand" href="/" >또오기 스토리</a>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav" >
                  <li class="nav-item">
                      <a class="page-scroll" href="/" style={{ margin: 30 }}>Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="page-scroll" href="/about"  style={{ margin: 30 }}>About</a>
                  </li>
                  <li class="nav-item">
                      <a class="page-scroll" href="/teahouse"  style={{ margin: 30 }}>TeaHouse</a>
                  </li>
                  <li class="nav-item">
                      <a class="page-scroll" href="/incenseshop"  style={{ margin: 30 }}>IncenseShop</a>
                  </li>
                  <li class="nav-item">
                      <a class="page-scroll" href="/store"  style={{ margin: 30 }}>스토어</a>
                  </li>
                  {/* <li class="">
                      <a class="page-scroll" href="#">News</a>
                  </li>
                  <li class="">
                      <a class="page-scroll" href="#">Help</a>
                  </li> */}
                  <li class="nav-item">
                      <a class="page-scroll" href="/contact"  style={{ margin: 30 }}>Contact</a>
                  </li>
                  {/* <li class="">
                      <a class="page-scroll" href="#">전체보기</a>
                  </li>
                  <li class="">
                      <a class="page-scroll" href="#">로그인</a>
                  </li> */}
              </ul>
            </div>  
        </nav>
    );
  };
}
   

export default Header;
