import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProduct} from '../actions/index';
import ProductItem from './productItem';


class BowelProduct extends Component{
  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.id);
  };

  render(){
    return(
      <div> 
        <ProductItem product={this.props.product}/>
      </div>
    );
  };
};

const mapStateToProps=(state,ownProps) => {
  return {product: state.products[ownProps.match.params.id]  }
};

export default connect(mapStateToProps,{fetchProduct})(BowelProduct);