import React from 'react';
import styled from 'styled-components';

const Base = styled.div`
  padding: 30px;
  min-height: 500px;
`;

const BaseName = styled.div`
  color: #666;
  font-weight: 600;
  padding: 3px 0 4px;
  line-height: 20px;
  border-bottom: solid 1px #000000;
  font-size: 20px;
`;

const SubName = styled.div`
  padding-left:10px;
  color: #666;
`;

const InputDiv = styled.div`
  padding: 20px;
  padding-left: 30px;
`;

const InputTitle = styled.input`
  width:87%;
  padding-bottom: 30px;
  border: none;
  font-size: 22px;
  border-bottom: solid 1px #ababab;
  font-weight: bold;
  &:focus{
    outline:none;
  }
`;

const InputContent = styled.textarea`
  width:91%;
  resize: none;
  border:none;
  height:500px;
  &:focus{
      outline:none;
  }
`;

const Submit = styled.a`
    border: solid 1px #ababab;
`;

export default class GeneralWrite extends React.Component {

    render() {
        return (
        <Base>
            <BaseName className='row'>자유게시판<SubName href='home'> | 글작성</SubName></BaseName>
                <InputDiv>
                    <form>
                    <InputTitle type='text' name='title' placeholder='제목'/>
                    <InputContent name='content' placeholder='내용을 입력하세요' />
                    <Submit href="/#/general" className="btn btn-light">작성</Submit>
                    </form>
                </InputDiv>
            
        </Base>
        );
    }
}
