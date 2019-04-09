import React, { Component } from 'react';
import ProductList2 from './productList2';

class MainProducts extends Component{

  render(){
    const {products}=this.props
    if(!products){
      return <div>Loading</div>
    }
    return(
      <React.Fragment>
        {products.map((product) => <ProductList2 key={product.id} product={product} />)}
      </React.Fragment>
    );
  };
};

export default MainProducts