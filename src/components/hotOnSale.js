import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/index';

class HotOnSale extends Component{
  render(){
    
    return(
      <div>{this.props.product.id}</div>
    );
  };
};

export default HotOnSale;