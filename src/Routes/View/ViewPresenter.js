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

const Div = styled.div`
  padding: 20px;
`;

const Titlediv = styled.div`
  width:87%;
  padding-bottom: 20px;
  border: none;
  border-bottom: solid 1px #ababab;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const Content = styled.div`
  width:91%;
  font-size: 16px;
  padding-top: 10px;
  resize: none;
  border:none;
  height:500px;
  &:focus{
      outline:none;
  }
`;

const Writer = styled.div`
  padding-top:5px;
`;

const CommentInput = styled.input`
  width: 75%;
  height: 100px;
`;

const CommentButton = styled.button`
  width: 10%;
  height: 98px;
`;

const CommentList = styled.div`
  width: 85%;
  display: grid;
  padding: 20px;
  font-weight: bold;
`;

const Comment = styled.div`
  display:grid;
  padding: 20px;
  grid-template-columns: 80% 20%;
  grid-template-rows:  
  border-bottom: solid 1px #ababab;
`;

const CommentWrtier = styled.div`
`;

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.id);
    if (this.props.id == 1) {
      return(
        <div>
        <Base>
          <BaseName>자유게시판</BaseName>
              <Div>
                <Titlediv>
                  <Title>자유게시판 ex1</Title>
                  <Writer>운영자</Writer>
                </Titlediv>
                <Content>
                  공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다.<br /> 모든 국민은 종교의 자유를 가진다.<br />

                  선거와 국민투표의 공정한 관리 및 정당에 관한 사무를 처리하기 위하여 선거관리위원회를 둔다.<br /> 법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다.<br />

                  제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은 대법원장이 지명하는 자를 임명한다. <br />국회의원은 법률이 정하는 직을 겸할 수 없다.<br /> 모든 국민은 언론·출판의 자유와 집회·결사의 자유를 가진다.<br />

                  국회나 그 위원회의 요구가 있을 때에는 국무총리·국무위원 또는 정부위원은 출석·답변하여야 하며, 국무총리 또는 국무위원이 출석요구를 받은 때에는 국무위원 또는 정부위원으로 하여금 출석·답변하게 할 수 있다.<br />

                  의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.<br /> 모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다.<br />
                </Content>
                <div>
                  <CommentInput placeholder="댓글을 작성하세요"></CommentInput>
                  <CommentButton className="btn btn-outline-secondary">작성</CommentButton>
                  <CommentList>
                    <Comment>
                      <div>input comment1</div>
                      <CommentWrtier>admin</CommentWrtier>
                    </Comment>
                    <Comment>
                      <div>input comment2</div>
                      <CommentWrtier>admin</CommentWrtier>
                    </Comment>
                  </CommentList>
                </div>
              </Div>
        </Base>
        <a className="btn btn-Light" href="/#/general">목록으로</a>
        </div>
      )
    }else if (this.props.id == 2){
      return(
        <div>
        <Base>
          <BaseName>공지</BaseName>
              <Div>
                <Titlediv>
                  <Title>공지게시판 ex</Title>
                  <Writer>운영자</Writer>
                </Titlediv>
                <Content>
                  공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다.<br /> 모든 국민은 종교의 자유를 가진다.<br />

                  선거와 국민투표의 공정한 관리 및 정당에 관한 사무를 처리하기 위하여 선거관리위원회를 둔다.<br /> 법관은 헌법과 법률에 의하여 그 양심에 따라 독립하여 심판한다.<br />

                  제2항의 재판관중 3인은 국회에서 선출하는 자를, 3인은 대법원장이 지명하는 자를 임명한다. <br />국회의원은 법률이 정하는 직을 겸할 수 없다.<br /> 모든 국민은 언론·출판의 자유와 집회·결사의 자유를 가진다.<br />

                  국회나 그 위원회의 요구가 있을 때에는 국무총리·국무위원 또는 정부위원은 출석·답변하여야 하며, 국무총리 또는 국무위원이 출석요구를 받은 때에는 국무위원 또는 정부위원으로 하여금 출석·답변하게 할 수 있다.<br />

                  의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.<br /> 모든 국민은 근로의 의무를 진다. 국가는 근로의 의무의 내용과 조건을 민주주의원칙에 따라 법률로 정한다.<br />
                </Content>
                <div>
                  <CommentInput placeholder="댓글을 작성하세요"></CommentInput>
                  <CommentButton className="btn btn-outline-secondary">작성</CommentButton>
                  <CommentList>
                    <Comment>
                      <div>input comment1</div>
                      <CommentWrtier>admin</CommentWrtier>
                    </Comment>
                    <Comment>
                      <div>input comment2</div>
                      <CommentWrtier>admin</CommentWrtier>
                    </Comment>
                  </CommentList>
                </div>
              </Div>
        </Base>
        <a className="btn btn-Light" href="/#/bulletin">목록으로</a>
        </div>
      )
    }
    return (
      <div>
      </div>
    );
  }
}
