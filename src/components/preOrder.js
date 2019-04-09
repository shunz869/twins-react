import React, { Component } from 'react';
import HotOnSale from './hotOnSale';

class PreOrder extends Component{

  render(){
    const {products}=this.props
    if(!products){
      return <div>Loading</div>
    }
    return(
      <div>
      {products.map((product) => <HotOnSale key={product.id} product={product} />)}
      </div>
    );
  };
};


export default PreOrder
