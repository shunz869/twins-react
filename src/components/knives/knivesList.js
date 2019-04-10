import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchKnivesList} from '../../actions/index';
import ProductList2 from '../productList2';

class Knives extends Component{
  componentDidMount(){
    this.props.fetchKnivesList();
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
  return {products:Object.values(state.knives),};
};
export default connect(mapStateToProps,{fetchKnivesList})(Knives);
