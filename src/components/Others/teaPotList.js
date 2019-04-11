import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPotList} from '../../actions/index';
import ProductList from '../productList';

class TeaPot extends Component {
  componentDidMount(){
    this.props.fetchPotList();
  }
  render(){
    const {teapots}=this.props
    return(
      <div className="row">
      {teapots.map((teapot) => <ProductList key={teapot.id} product={teapot} />)}
      </div>
    );
  }
};

const mapStateToProps =(state) => {
  return {teapots:Object.values(state.teapots),};
};
export default connect(mapStateToProps,{fetchPotList})(TeaPot);