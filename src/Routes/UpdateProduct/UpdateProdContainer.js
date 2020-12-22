import { productApi } from 'api';
import React, { Component } from 'react';
import UpdateProdPresenter from './UpdateProdPresenter';

class UpdateProdContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prodName: "",
            price: "",
            prodImage: "",
            prodSummary: "",
            desc: "",
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { prodName, price, prodImage, prodSummary, desc } = this.state;
        if (prodName === ""){
            alert ("상품명을 입력하세요");
            return;
        } else if (price === ""){
            alert("가격을 입력하세요");
            return;
        } else if (prodImage === ""){
            alert("이미지를 넣어주세요");
            return;
        } else if (prodSummary === ""){
            alert("요약을 입력하세요");
            return;
        } else if (desc === ""){
            alert("설명을 입력하세요");
            return;
        }
        this.saveProduct();
    };

    updateInfo = (e) => {
        const {
            target: {value,name},
        } = e;
        this.setState({
            [name]: value,
        });
    };

    saveProduct = (e) => {
        const { prodName, price, prodImage, prodSummary, desc } = this.state;
        let prod = {
            prodName,
            price,
            prodImage,
            prodSummary,
            desc,
        };
        productApi
            .insertProd(prod)
            .then((res) => {
                alert(`${prodName}을(를) 성공적으로 등록하였습니다`);
                this.props.history.push("/store");
            })
            .catch((err) => {
                alert("등록에 실패하였습니다");
                console.log(err);
                return;
            });
    };
    
    render() {
        const { prodName, price, prodImage, prodSummary, desc } = this.state;
        return (
            <UpdateProdPresenter 
            prodName={prodName}
            price={price}
            prodImage={prodImage}
            prodSummary={prodSummary}
            desc={desc}
            handleSubmit={this.handleSubmit}
            updateInfo={this.updateInfo}
            />
        );
    }
}

export default UpdateProdContainer;