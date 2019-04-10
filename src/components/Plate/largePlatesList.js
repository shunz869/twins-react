import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchLargePlateList} from '../../actions/index'
import ProductList from '../productList';

class LargePlates extends Component{
  componentDidMount(){
    this.props.fetchLargePlateList();
  }
  render(){
    const {largeplates} = this.props;
    return(
      <div className="row">
        {largeplates.map((largeplate) => <ProductList key={largeplate.id} product={largeplate} />)}
      </div>
    );
  };
};

const mapStateToProps =(state) => {
  return {largeplates:Object.values(state.largeplates),};
};
export default connect(mapStateToProps,{fetchLargePlateList})(LargePlates);