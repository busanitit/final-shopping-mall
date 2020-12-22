import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Title = styled.div`
  display: inline-block;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #145b3a;
  border-bottom: 1px solid #145b3a;
  margin-top: 80px;
`;

const SemiTitle = styled.h4`
  color: #145b3a;
  text-align: center;
  font-size: 22px;
  font-weight: 600;
`;

const Container = styled.div`
  display: flex;
  padding: 25px 20px;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form``;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  &:first-child {
    margin-top: 5px;
  }
`;
//가로로 배열될뻔한게 InputBox로 세로로 배열

const Input = styled.input`
  all: unset;
  border-bottom: 1px solid black;
  width: 45vw;
  font-size: 17px;
  &:focus {
    font-weight: 600;
  }
`;

const Button = styled.button`
  border: 1px solid #145b3a;
  border-radius: 5px;
  padding: 20px 50px;
  background-color: #145b3a;
  color: #fff;
  font-size: 22px;
  font-weight: 600;
  width: 45vw;
`;

const Notice = styled.div`
  text-align: center;
  margin-top:-20px;
`;

const SLink = styled(Link)`
  font-size: 10px;
`;

const UpdateProdPresenter = ({
    prodName,
    price,
    prodImage,
    prodSummary,
    desc,
    handleSubmit,
    updateInfo,
}) => (
    <>
        <Title>Update</Title>
        <SemiTitle>상품등록</SemiTitle>
        <Container>
            <Form onSubmit={handleSubmit}>
                <InputBox>
                    <Input 
                        placeholder="상품명"
                        onChange={updateInfo}
                        value={prodName}
                        name='prodName'
                    />
                </InputBox>
                <InputBox>    
                    <Input 
                        placeholder="상품가격"
                        onChange={updateInfo}
                        value={price}
                        name='price'
                    />
                </InputBox>
                <InputBox>    
                    <Input 
                        input type="file"
                        name="file"
                        onChange={updateInfo}
                        value={prodImage}
                    />
                </InputBox>
                <InputBox>    
                    <Input 
                        placeholder="상품요약"
                        onChange={updateInfo}
                        value={prodSummary}
                        name='prodSummary'
                    />
                </InputBox>
                <InputBox>    
                    <Input 
                        placeholder="상품설명"
                        onChange={updateInfo}
                        value={desc}
                        name='desc'
                    />
                </InputBox>
                <InputBox>
                    <Button>Update</Button>
                </InputBox>
                <Notice>
                    <SLink to='/store'>이미 등록된 상품이라면?</SLink>
                </Notice>
            </Form>
        </Container>
    </>
);


export default UpdateProdPresenter;