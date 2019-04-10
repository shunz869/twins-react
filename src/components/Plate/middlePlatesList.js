import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchMidPlateList} from '../../actions/index'
import ProductList from '../productList';

class MiddlePlates extends Component{
  componentDidMount(){
    this.props.fetchMidPlateList();
  }
  render(){
    const {midplates} = this.props;
    return(
      <div className="row">
        {midplates.map((midplate) => <ProductList key={midplate.id} product={midplate} />)}
      </div>
    );
  };
};

const mapStateToProps =(state) => {
  return {midplates:Object.values(state.midplates),};
};
export default connect(mapStateToProps,{fetchMidPlateList})(MiddlePlates);