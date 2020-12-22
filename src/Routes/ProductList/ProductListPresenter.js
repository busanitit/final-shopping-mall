import React, { Component } from "react";
import { productApi } from '../../api';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';


class ProductListPresenter extends Component {
    constructor(props) {
        super(props);
 
        this.state = {
            products: [],
            message: null,
        }
    }

    componentDidMount() {
        console.log('ProductList componentTableCellMount()');
        this.reloadProductList();
    }

    reloadProductList = () => {
        productApi.fetchProdById()
        //재확인
            .then(res => {
                this.setState({ products: res.data });
            })
            .catch(err => {
                console.error('reloadProductList() 에러!',err);
            })
    }
    insertProd = (prod) => {
        //재확인
        window.localStorage.removeItem('prod');
        this.props.history.push('/update');
    }
    //재확인
 
    deleteProd = (prodID) => {
        productApi.deleteProd(prodID)
            .then(res => {
                this.setState({
                    message: '성공적으로 삭제했습니다',
                    prods: this.state.prods.filter(prod => prod.id !== prodID)
                    //재확인
                });
            })
            .catch(err => {
                console.error('deleteProd() 에러!', err);
            })
 
    }
    
    render() {
        return (
            <div>
                <Typography variant="h4" style={style}><Title>Product List</Title></Typography>
                <Button variant="contained" color="Success" onClick={this.insertProd}>Add Product</Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>prodID</TableCell>
                            <TableCell>prodName</TableCell>
                            <TableCell>prodSummary</TableCell>
                            <TableCell>price</TableCell>
                            <TableCell>desc</TableCell>
                            <TableCell align="center">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.products.map(prod =>
                            <TableRow key={prod.id}>
                                <TableCell component="th" socpe="prod">{prod.id}</TableCell>
                                <TableCell align="left">{prod.prodID}</TableCell>
                                <TableCell align="left">{prod.prodName}</TableCell>
                                <TableCell align="left">{prod.prodSummary}</TableCell>
                                <TableCell align="left">{prod.price}</TableCell>
                                <TableCell align="left">{prod.desc}</TableCell>
                                <TableCell align="center" onClick={() => this.deleteProd(prod.id)}>
                                    <DeleteIcon />
                                </TableCell>
                            </TableRow>
                        )}
 
                    </TableBody>
                </Table>
            </div>
        );
    }


}
const style = {
    display: 'flex',
    justifyContent: 'center',
}

const Title = styled.div`
  display: inline-block;
  padding-bottom: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #145b3a;
  border-bottom: 1px solid #145b3a;
  margin-top: 80px;
`;
 
export default ProductListPresenter;
