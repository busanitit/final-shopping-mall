import React from 'react';
import styled from 'styled-components';
import { ImFacebook2, ImTwitter, ImInstagram, ImBlogger2 } from 'react-icons/im';
import { BsQuestionCircle } from 'react-icons/bs';

const footer = () => {
   return (
      <div className='main_footer' style={{backgroundColor: 'black', color: 'lightgray', fontWeight: 'bold', fontSize: '17px'}} >
         <div className="container" >
            <div className="row">
            </div>
            <div className="row" style={{padding: 50, marginBottom: 0, marginTop: 20}}>
               <p><span><button type="button"  style={{padding: 10, marginBottom: 40, backgroundColor: 'black', color: 'lightgray', fontWeight: 'bold', fontSize: '20px'}}>또오기 스토어@&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;▼</button>&nbsp;&nbsp;
                  <a><BsQuestionCircle style={{fontSize: '25px'}}/></a></span><br/>
               
               <ul>
                  <li style={{ marginBottom: 40,  fontSize: '13px'}}><ins>신고하기</ins> &nbsp;▶</li>
                     <ImBlogger2 />
                        <a><span> · </span></a>
                     <ImFacebook2 />
                        <a><span> · </span></a>
                     <ImTwitter />
                        <a><span> · </span></a>
                     <ImInstagram />
               </ul>
               </p>
               <hr/>
               
               <p style={{marginTop: 5}}><span style={{color: 'darkyellow'}}>￦ </span><span style={{color: 'GrayText'}}>계좌정보</span>
               <hr style={{color: 'lightgray' }}/>
               <span style={{color: 'GrayText'}}>예금주</span> &nbsp; &nbsp; &nbsp; &nbsp;<span>홍 길 동</span> &nbsp;
               <hr/>
               <span style={{color: 'GrayText'}}>입금은행</span> &nbsp; &nbsp; <span> 부산은행 </span>&nbsp;
               <hr/>
               <span style={{color: 'GrayText'}}>계좌번호</span> &nbsp; &nbsp; <span> 110-051-117722 </span>&nbsp;
               </p>
            </div>
         </div>
      </div>
   ); 
};

export default footer;


