import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from '../actions/index';
import ProductList2 from './productList2';


class BowelList extends Component{
  componentDidMount(){
    this.props.fetchProducts();
  };

  render(){
    const {products} = this.props;
    return(
      <div className="row" style={{marginTop:50}}>
      {products.map((product) => <ProductList2 key={product.id} product={product} />)}
      </div>
    );
  };
};

const mapStateToProps =(state) => {
  return {products:Object.values(state.products),};
};
export default connect(mapStateToProps,{fetchProducts})(BowelList);

