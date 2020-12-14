import React, { Component } from 'react';

class Header extends Component {
  render () {
      return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark" style={{flex:1, backgroundColor: 'gray'}} >
            <a className="navbar-brand" href="/" >또오기 스토리 │ </a>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav" >
                  <li className="nav-item">
                      <a className="page-scroll" href="/" style={{ margin: 30 }}>Home</a>
                  </li>
                  <li className="nav-item">
                      <a className="page-scroll" href="/#/about"  style={{ margin: 30 }}>About</a>
                  </li>
                  <li className="nav-item">
                      <a className="page-scroll" href="/#/teahouse"  style={{ margin: 30 }}>TeaHouse</a>
                  </li>
                  <li className="nav-item">
                      <a className="page-scroll" href="/#/incenseshop"  style={{ margin: 30 }}>IncenseShop</a>
                  </li>
                  <li className="nav-item">
                      <a className="page-scroll" href="/#/store"  style={{ margin: 30 }}>스토어</a>
                  </li>
                  {/* <li className="">
                      <a className="page-scroll" href="#">News</a>
                  </li>
                  <li className="">
                      <a className="page-scroll" href="#">Help</a>
                  </li> */}
                  <li className="nav-item">
                      <a className="page-scroll" href="/#/contact"  style={{ margin: 30 }}>Contact</a>
                  </li>
                   <li className="">
                      <a className="page-scroll" href="/"style={{ margin: 30 }}>전체보기</a>
                  </li>
                  <li className="">
                      <a className="page-scroll" href="/"style={{ margin: 30 }}>로그인</a>
                  </li> 
              </ul>
            </div>  
        </nav>
    );
  };
}
   

export default Header;
