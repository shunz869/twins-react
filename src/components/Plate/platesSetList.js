import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPlatesSetList} from '../../actions/index'
import ProductList from '../productList';

class PlatesSet extends Component{
  componentDidMount(){
    this.props.fetchPlatesSetList();
  }
  render(){
    const {platessets} = this.props;
    return(
      <div className="row">
        {platessets.map((plateset) => <ProductList key={plateset.id} product={plateset} />)}
      </div>
    );
  };
};

const mapStateToProps =(state) => {
  return {platessets:Object.values(state.plates),};
};
export default connect(mapStateToProps,{fetchPlatesSetList})(PlatesSet);

