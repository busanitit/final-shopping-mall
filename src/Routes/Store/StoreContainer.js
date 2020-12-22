import React, { Component } from 'react';
import StorePresenter from './StorePresenter';
import { productApi } from '../../api';

class StoreContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      products: [],
    };
  }
  
  async componentDidMount() {
    try {
      const { data: products } = await productApi.prodList();
      // console.log(products);
      this.setState({
        products,
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
 
  
  render() {
    const { products, loading } = this.state;
    return (
        <StorePresenter 
          products={products}
          loading={loading}
        />
    );
  }
}

export default StoreContainer;